class TestsController < ApplicationController

  def index
    @tests = Test.all
  end

  def create
    name = Test.create(name: params[:name])
    render json:{ test: name }
  end

end
