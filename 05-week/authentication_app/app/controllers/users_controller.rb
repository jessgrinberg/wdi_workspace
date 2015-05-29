class UsersController < ApplicationController
	def index  #step4 make a method for the index
		@users = User.all
	end

	def new #STEP 6, make a method for the new user
		@user = User.new
	end

	def create #STEP 8, make a method to store the new user infos, the new and create are needed together
		@user = User.new(user_params) 
		if @user.save #if the user has been saved it willbe directed to a page with the new user name
			redirect_to users_path 
		else #if the user didnt fill out the form well, it will remain to the form, until the infos are passing
			render :new
		end
	end

	private #STEP 6.5 we are making this private in order to use the user_params more quick when needed
	def user_params 
		params.require(:user).permit(:name, :email, :password, :password_confirmation)
	end

end
