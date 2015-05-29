class BooksController < ApplicationController
	def index 
		@books = Book.all
	end

	def more_details
		@book = Book.find(params[:id])
	end

	def new
		@book = Book.new
	end

	def add 
		@book = Book.new(params.require(:book).permit(:name, 
			:author, :year, :price))
		if @book.save
			redirect_to books_path
		else
			render :new
		end
 	 end

 	# def remove
 	# 	@book = Book.remove(params[:id])
 	# end

end
