class HomeController < ApplicationController
  def index
    render 'index', locals: {timelines: timelines}
  end

  private

  def timelines
    [Timeline.new(1, 'Test 1'), Timeline.new(2, 'Test 2'), Timeline.new(3, 'Test 3')]
  end

  Timeline = Struct.new(:id, :name) do; end
end