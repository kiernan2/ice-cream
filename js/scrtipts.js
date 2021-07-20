$(document).ready(function() {
  const array1 = ["Vanilla ","Chocolate ","Cookies N' Cream ","Mint Chocolate ","Chocolate Chip Cookie Dough ","Buttered Pecan ","Cookie Dough ","Strawberry ","Moose Tracks ","Neapolitan"]
  array1.forEach(element => {
    $("#output").append(element)
  });
});