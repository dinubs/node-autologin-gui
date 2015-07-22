require 'rubygems'
require 'mechanize'

# create Mechanize instance
agent = Mechanize.new

# get the login form & fill it out with the username/password
login_form = agent.get("http://www.songfari.com/login").form_with(:id => "form")
login_form.email = "gavin_dinubilo@mail.tmcc.edu"
login_form.password = "facesaw"

page = agent.submit(login_form)
pp page