function validateInputs(){
  const name = $('#expense').val().trim()
  const amount = $('#amount').val().trim()

  if(name === "" || amount === "" || !$.isNumeric(amount) || (amount) < 0){
    if(name === ""){
     $('#message').html("Please enter the name")
   }
    else{
      $('#message').html("Please enter the amount > 0");
    }
     return 0 
  }
  
  $('#message').html("")
  return 1

} 
function addRow(name,amount){
  // const num_rows = $('#num_rows').val()
  const row_to_add = `<tr><td>${name}</td><td>${amount}</td><td><button id="${num_rows}" class="delete_button">Delete</button></tr>`
  $('#tbody1').append(row_to_add)
  // $('#num_rows').val() = $('#num_rows').val() +1;
  const current_sum = parseInt($("#sum"). text()) + parseInt(amount)
   $('#sum').html(current_sum)
 
}
function elementToAdd(name){
  return `<li><span class="remove">&#128465</span>${name}</li>`
}

$('#add_button').click(function () {
  const name = $('#expense').val().trim()
  const amount = $('#amount').val().trim()
  const result = validateInputs()

  if( result === 1){

    let item1 = elementToAdd(name)
    // $(item1).find(".remove").click(function(){
    //   const num_rows = $('num_rows').val()
      
    //   const rowToDelete =  $('#expenses_table tbody tr').eq(num_rows);
    //   rowToDelete.remove();
    //   $('num_rows').val() = $('num_rows').val() +1;
    //         })
    addRow(name,amount) 
   
    $('#expenses-list').append(item1)
    $('#expense').val("") 
    $('#amount').val("")
    $('#display_expenses').show()
  }
})
