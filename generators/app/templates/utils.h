
#pragma once
#include "bits/stdc++.h"
using namespace std;


template <typename T>
void show(string const & msg, vector<T> v) {
  cout << msg << " {";
  int count = 0;
  for (auto & item: v) {
    if (count++ > 0) {
      cout << ", ";
    }
    cout << item;
  }
  cout << "}" << endl;
}

template<typename T>
void show(string const & msg, T const & x) {
  cout << msg << " " << x << endl;
}


template <typename T>
bool assertEq(T const &expected, T const &actual) {
  if (actual != expected) {
    show("expected: ", expected);
    show("actual:   ", actual);

//    assert(false);
    return false;
  }
  return true;
}
