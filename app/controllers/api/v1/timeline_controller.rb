module Api
  module V1
    class TimelineController < ApiController
      def show
        if params[:id].nil?
          return json_respond 'Please pass in an id.', 500
        end

        json_respond find_timeline(params[:id]), :ok
      end

      private

      def find_timeline(id)

      end
    end
  end
end
