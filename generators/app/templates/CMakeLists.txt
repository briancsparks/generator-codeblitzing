cmake_minimum_required(VERSION 3.23)
project(<%= name %>)

set(CMAKE_CXX_STANDARD 20)

add_executable(<%= name %> main.cpp bits/stdc++.h linuxwords.h utils.h main.h)
