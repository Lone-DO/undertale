Undertale.Router.map(function () {
  this.resource('undertale', {path: '/'});
  this.resource('about');
  this.resource('contact');
  this.resource('demo');
  this.resource('merch');
  this.resource('faq');
  this.resource('troubleshoot');
  
  this.resource('mailbox');
  this.resource('fanmail', function () {
    this.resource('new-mail');
  });
  
});