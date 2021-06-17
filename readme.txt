#############################################
        |  | O
        |--| |  Thanks Odin Project!
        |  | |
#############################################

1. Intro

    So this is a project that I did because of
    the odin project. It's part of the course
    curriculum. I really appreciate how the site
    gives out such a helpful curriculum for free. 
    Honestly I think it's utterly amazing that they
    do that for people. I'm working on it to try
    to increase my skills in front-end programming. 
    I have a goal of starting my own web design 
    company. It's hard not to feel a bit late to 
    the game starting to take the career seriously
    at 30, but from everything I've heard and read
    online, schooling and age are only a factor and
    they do not exclude you from having a good
    career in the field, I hope that's true. 

2. The Project
    
    Pretty simple. Make an interface where a user
    can make a list of books, edit and delete them. 
    And hopefully I can add in some local or firebase
    storage so that they don't need to re-write it 
    everytime they visit the site. It wouldn't be too
    necessary because it's not really gonna be a 
    serious list for people. But it would be nice to 
    have it working just to have more experience with 
    storing information in that way. 

3. HTML 

    Pretty simple stuff. Used Bootstrap to skip having
    to make buttons and rows and containers pretty in
    css. Aside from that the HTML is pretty bare. Most
    of it is importing firebase, bootstrap, and I also
    linked the montserrat font because it's beautiful

4. CSS.

    Nothing of note here so far at least. Will try to 
    dig deeper when the logic is finished but it's mostly
    just trying to keep a blue monochromatic aesthetic. 
    I went with the bootstrap primary color and kept it 
    as the cental color theme. It looks professional with
    a white background. 

5. Javascript 

    So Javascript is obviously more of a challenge than 
    HTML and CSS but it's starting to feel pretty second
    nature to me. It was challenging to try to figure out
    how to point to hmtl elements that were made in Javascript
    that don't have unique identifiers. So it was cool to
    learn about using event objects to point to the unique
    cell and to change elements within it using e.target.etc..
    Aside from that, I commented out a lot of code, some of
    it was just practice code before i started on the project
    some of it just didn't make sense. But I wanted to leave 
    it in to help remind me of the process. 

    The overall idea of the javascropt process for this app is
    to have the user click the plus button which reveals a
    input box with showForm(). Then when they hit create, it takes those inputs to
    create a book object createBook(newBook), libraryFeed(myLibrary slice(-1)). Then that book object should be created as
    . Basically these functions serve to separate actions a bit.
    I have the Book object constructor. I want another function to 
    call a new instance of that object. I want that object to be
    added to the mylibrary array. I want to print out that slice
    of the array. And I want it create all the elements of that
    book object. I then want to make sure that removeBook and editBook
    both are hooked to the buttons on the element, and that they
    can edit or remove those elements as needed. Which is functional.

6. Possible improvements

    Currently, I think the app could use a proper header area. 
    It could possibly be a bit more eye catching. I would like
    the + button to act like a switch and to flip between open 
    and closed. Turning display from none back to flex and vice versa.
    I could also add more about the books, like page counts or 
    rating out of 5 or 10. What I wouldn't want to do is take away
    from the monochromatic page style too much, or distract from
    it's functionality. I can definitely still add in some storage
    functionality with either local storage or firebase, and I 
    could add some validation to make sure that the inputs make sense. 
    Like for instance I could make it so that the names cannot repeat. 