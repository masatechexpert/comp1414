class GroupsController < ApplicationController
   before_action :set_group, only: [:edit, :update]

  def index
  end

  def new
    @group = Group.new
    @group.users << current_user
    User.where.not(id: current_user.id)
    @groups = Group.where(admin_user_id: 1)
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def update
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: 'グループを編集しました'
    else
      render :edit
    end
  end

  def destroy
    group = Group.find(params[:id])
    group.destroy
    redirect_to root_path
  end

  private
  def group_params
    params.require(:group).permit(:name, :admin_user_id, { :user_ids => [] })
  end

   def set_group
    @group = Group.find(params[:id])
  end

  def add_user_to_group
    AddUserToGroup.create(user_id: params[:user_id], group_id: params[:group_id])
  end

end