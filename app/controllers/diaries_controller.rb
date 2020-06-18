class DiariesController < ApplicationController
    # before_action :authorized
    
    def index
        @entries = Diary.all 
        render json: @entries
    end


    def create
        @entry = Diary.create(
            emtry: params[:entry],
            
        )
        render json: @entry
    end

end
