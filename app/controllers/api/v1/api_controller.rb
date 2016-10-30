module Api
  module V1
    class ApiController < ApplicationController
      private

      def json_respond(body = {}, status = :ok)
        body = body.is_a? String ? {message: body} : {result: body}
        success = (status.to_s[0] == '2' or [:created, :ok].include?(code))
        resp = { success: success }.merge(body)
        render json: resp, status: code
      end
    end
  end
end
