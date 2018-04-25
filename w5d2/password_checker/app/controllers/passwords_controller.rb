class PasswordsController < ApplicationController
  def create
    @userid = params[:userid].to_s unless params[:userid].nil?
    @password = params[:password].to_s unless params[:password].nil?
    cookies[:userid] = params[:userid]
    cookies[:password] = params[:password]
    render 'create.html.erb'
    # TODO: Find a way to flash notification when conditions are met
    # if cookies[:userid] != nil && cookies[:password] != nil
    #   flash.now[:notice] = "Your Account Has Been Created!"
    # else
    # end
  end

  def access
    @useridenter = params[:useridenter].to_s
    @passwordenter = params[:passwordenter].to_s
    if params[:useridenter].to_s == cookies[:userid] && params[:passwordenter].to_s == cookies[:password]
      render 'account.html.erb'
    # TODO: Make elsif statement WORK!!!!!!! Needs to show different view when creds are invalid
    # elsif params[:useridenter].to_s == !cookies[:userid] && params[:passwordenter].to_s == !cookies[:password]
    #   render 'invalid.html.erb'
    else
    end
  end

  # def account
  #   render 'account.html.erb'
  # end
  # def valid
  #   cookies[:valid] = params[:valid] unless params[:valid].nil?
  #
  # end
end
