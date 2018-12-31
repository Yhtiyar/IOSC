package com.yhtiyar.contactapp.models;

/**
 * Created by user on 23.10.2017.
 */
public class Entry {
    int id;
    int entryAuthorId;
    int entryTitle;
    int entryText;
    int raiting;

    public int getId() {return id;}

    public void setId(int id) {this.id = id;}

    public int getEntryAuthorId() {return entryAuthorId;}

    public void setEntryAuthorId(int entryAuthorId) {this.entryAuthorId = entryAuthorId;}

    public int getEntryTitle() {return entryTitle;}

    public void setEntryTitle(int entryTitle) {this.entryTitle = entryTitle;}

    public int getEntryText() {return entryText;}

    public void setEntryText(int entryText) {this.entryText = entryText;}

    public int getRaiting() {return raiting;}

    public void setRaiting(int raiting) {this.raiting = raiting;}

    @Override
    public String toString() {
        return "Entry{" +
                "id=" + id +
                ", entryAuthorId=" + entryAuthorId +
                ", entryTitle=" + entryTitle +
                ", entryText=" + entryText +
                ", raiting=" + raiting +
                '}';
    }
}
