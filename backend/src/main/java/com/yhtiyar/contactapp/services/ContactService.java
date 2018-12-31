package com.yhtiyar.contactapp.services;

import com.yhtiyar.contactapp.models.Contact;

import java.util.List;

/**
 * Created by user on 12.07.2017.
 */
public interface ContactService {

    void add( Contact contact);
    void reset();
    void update(Contact contct );
    void delete(Contact contact);

    List<Contact> findAll();


}
