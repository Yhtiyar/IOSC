package com.yhtiyar.contactapp.rowMapper;

import com.yhtiyar.contactapp.models.Contact;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by user on 20.07.2017.
 */
public class ContactRowMapper  implements RowMapper<Contact> {


    @Override
    public Contact mapRow(ResultSet resultSet, int i) throws SQLException {

        Contact contact = new Contact();
        contact.setId(resultSet.getInt("Id"));
        contact.setName(resultSet.getString("Name"));
        contact.setEmailAdress(resultSet.getString("EmailAdress"));
        contact.setPhoneNumber(resultSet.getString("PhoneNumber"));
        return contact;
    }
}
