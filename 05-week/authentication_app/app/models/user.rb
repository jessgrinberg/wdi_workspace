class User < ActiveRecord::Base
	has_secure_password #STEP2: we added this line to have a secure password
end
