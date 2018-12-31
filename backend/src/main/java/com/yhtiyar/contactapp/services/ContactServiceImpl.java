package com.yhtiyar.contactapp.services;

import com.yhtiyar.contactapp.dao.ContactDaoImpl;
import com.yhtiyar.contactapp.models.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by user on 12.07.2017.
 */

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    ContactDaoImpl contactDao;

    @Override
    public List<Contact> findAll() {

        return contactDao.getAll();
    }

    @Override
    public void delete(Contact contact) {
        contactDao.delete(contact);
    }



    @Override
    public void add(Contact contact) {
        contactDao.addNew( contact);
    }

    @Override
    public void reset() {
         contactDao.reset();
    }

    @Override
    public void update(Contact contact) {
        contactDao.update(contact);
    }
}
