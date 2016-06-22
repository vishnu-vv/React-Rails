class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find params[:id]
  end

  def new
    render component: 'PostsNew', props: { user_id: current_user.id, create_post_url: posts_path }
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: { redirect_url: posts_path }
    else
      render json: { errors: @post.errors.full_messages }
    end
  end

  def from_server
    @posts = Post.all
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :user_id)
  end
end
