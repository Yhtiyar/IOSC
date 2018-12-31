package com.yhtiyar.contactapp.models;

/**
 * Created by user on 23.10.2017.
 */
public class Teacher {
    int id;
    String Login;
    String name,surname;
    int userTypeId;
    int CountryId;

    public int getId() {return id;}

    public void setId(int id) {this.id = id;}

    public String getLogin() {return Login;}

    public void setLogin(String login) {Login = login;  }

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public String getSurname(){ return surname;}

    public void setSurname(String surname) {this.surname = surname;}

    public int getUserTypeId() {return userTypeId;}

    public void setUserTypeId(int userTypeId) {this.userTypeId = userTypeId;}

    public int getCountryId() {return CountryId;}

    public void setCountryId(int countryId) {CountryId = countryId;}


    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", userTypeId=" + userTypeId +
                ", CountryId=" + CountryId +
                '}';
    }

}
