package com.yhtiyar.contactapp.dao;

import com.yhtiyar.contactapp.models.Contact;

import java.util.List;

/**
 * Created by user on 12.07.2017.
 */
public interface ContactDao {


    List<Contact> getAll();

    void  addNew( Contact contact);
    void  reset();
    void update(Contact contact);
    void delete (Contact contact);

}
