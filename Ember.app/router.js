Undertale.Router.map(function () {
  this.resource('undertale', {path: '/'});
  this.resource('about');
  this.resource('contact');
  this.resource('demo');
  this.resource('merch');
  this.resource('faq');
  this.resource('troubleshoot');
  this.resource('fanmail', function () {
    this.resource('newmail');
    this.resource('mailbox');
  });
  this.resource('gallery');
  this.resource('musicbox');
});