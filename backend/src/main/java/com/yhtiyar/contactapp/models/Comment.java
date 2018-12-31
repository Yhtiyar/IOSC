package com.yhtiyar.contactapp.models;

/**
 * Created by user on 23.10.2017.
 */
public class Comment {
    int id;
    int entryId;
    int commnetText;
    int commnetAuthorId;

    public int getId() {return id;}

    public void setId(int id) {this.id = id;}

    public int getEntryId() {return entryId;}

    public void setEntryId(int entryId) {this.entryId = entryId;}

    public int getCommnetText() {return commnetText;}

    public void setCommnetText(int commnetText) {this.commnetText = commnetText;}

    public int getCommnetAuthorId() {return commnetAuthorId;}

    public void setCommnetAuthorId(int commnetAuthorId) {this.commnetAuthorId = commnetAuthorId;}

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", entryId=" + entryId +
                ", commnetText=" + commnetText +
                ", commnetAuthorId=" + commnetAuthorId +
                '}';
    }
}
