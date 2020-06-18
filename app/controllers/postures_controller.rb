class PosturesController < ApplicationController
    before_action :authorized
    before_action :find_posture_by_id, only: [:show]
    
    def index
        @postures = Posture.all 
        render json: @postures
    end

    def show
        render json: @posture
    end

    def create
        @posture = Posture.create(
            name: params[:name],
            description: params[:description],
            level: params[:level],
            is_breathing_in: params[:is_breathing_in],
            image: params[:image]
        )
        render json: @posture
    end

    private

    def find_posture_by_id
        @posture = posture.find(params[:id])
    end
end
