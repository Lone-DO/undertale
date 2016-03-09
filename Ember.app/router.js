Undertale.Router.map(function () {
  this.resource('undertale', function() {
    this.resource('troubleshoot');
    this.resource('faq');
  });
  this.resource('about');
  this.resource('demo');
  this.resource('merch');
  this.resource('contact');
//  New Site Features
  //Fanmail Interface
  this.resource('mailbox', function () {
    this.resource('new-mail');
    this.resource('mail');
  });
  //Gallery for Fan made Art Collections
  this.resource('gallery');
  //Musicbox for variety of Undertale Hit tunes
  this.resource('musicbox');
});