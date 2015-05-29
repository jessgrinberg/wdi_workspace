module SessionsHelper
	def current_user #STEP E
 	 @current_user ||= User.find_by(id: session[:user_id])
 	 #if the current doesnt exist find it by its email address
	end
end
