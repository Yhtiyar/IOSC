package com.yhtiyar.contactapp.models;

/**
 * Created by user on 23.10.2017.
 */
public class Admin {
    int id;
    String Login;
    String Name;
    String Suranme;
    int  userTypeId=1;
    public Admin() {

    }

    public String getLogin() {return Login;}

    public void setLogin(String login) {Login = login;}

    public int getId() {return id;}

    public void setId(int id) {this.id = id;}

    public String getName() {return Name;}

    public void setName(String name) {Name = name;}

    public String getSuranme() {return Suranme;}

    public void setSuranme(String suranme) {Suranme = suranme;}

    public int getUserTypeId() {return userTypeId;}

    public void setUserTypeId(int userTypeId) {this.userTypeId = userTypeId;}

    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", Login='" + Login + '\'' +
                ", Name='" + Name + '\'' +
                ", Suranme='" + Suranme + '\'' +
                ", userTypeId=" + userTypeId +
                '}';
    }
}
