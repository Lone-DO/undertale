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
  this.resource('fanmail', function () {
    this.resource('mailbox');
    this.resource('new-mail');
    this.resource('mail');
  });
  this.resource('gallery');
  this.resource('musicbox');
});