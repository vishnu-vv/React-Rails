desc 'Ensure that code is not running in production environment'
task :not_production do
  raise 'do not run in production' if Rails.env.production?
end

desc 'Sets up the project by running migration and populating sample data'
task setup: [:environment, :not_production, 'db:drop', 'db:create', 'db:migrate'] do
  ["setup_sample_data"].each { |cmd| system "rake #{cmd}" }
end

def delete_all_records_from_all_tables
  ActiveRecord::Base.connection.schema_cache.clear!

  Dir.glob(Rails.root + 'app/models/*.rb').each { |file| require file }

  ActiveRecord::Base.descendants.each do |klass|
    klass.reset_column_information
    klass.delete_all
  end
end

desc 'Deletes all records and populates sample data'
task setup_sample_data: [:environment, :not_production] do
  delete_all_records_from_all_tables

  create_user email: 'sam@example.com'

  create_posts User.first

  puts 'sample data was added successfully'
end

def create_user( options = {} )
  user_attributes = { email: 'sam@example.com',
                      password: 'welcome',
                      first_name: "Sam",
                      last_name: "Smith",
                      role: "super_admin" }
  attributes = user_attributes.merge options
  User.create! attributes
end

def create_posts(user)
  sample_posts = [
  ["Rails 5 supports adding comments in migrations", "Database schemas change rapidly as project progresses. And it can be difficult to track purpose of each table and each column in a large project project with mutliple team members."],
  ["Rails 5 allows UUID as column type in create_join_table", "In Rails 4.x create_join_table allows us to create new join table with name given in first two arguments. Rails 5 has started supporting UUID as a column type for primary key, so create_join_table should also support UUID as a column type instead of only integers. Hence now Rails 5 allows us to use UUID as a column type with create_join_table."],
  ["Rails 5 adds another base class Application Job for jobs", "Rails 5 has added another base class ApplicationJob which inherits from ActiveJob::Base. Now by default all new Rails 5 applications will have application_job.rb."]
]

  sample_posts.each do |post|
    Post.create! user_id: user.id, title: post[0], content: post[1]
  end
end
