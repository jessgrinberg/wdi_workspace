class SessionsController < ApplicationController
#STEP B , create methods
	def new

	end


	def create #STEP D
		user = User.find_by(email: params[:login][:email]) #by finding at the email, we want to make sure the login and password are ok
		#it could be find by username find_by(username: params[:login][:username]) etc..
		
		if user && user.authenticate(params[:login][:password])
			#log user in and it sets a cookie!
			session[:user_id] = user.id.to_s #we turned it into a string in case its not, its easier
			redirect_to users_path
		else
			render :new 
			#they will be directed to the new form again
		end
	end

	def destroy #STEPG G
		session.delete(:user_id)
		redirect_to login_path
	end
end
