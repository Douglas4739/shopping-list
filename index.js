function checkedItems() { //this function takes care of the event of checking off an item
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) { //this sets up the event function when clicking check buttons
        let title = $(this).parent().siblings();
        title.toggleClass("shopping-item__checked");
    });
}
function deleteItem() {//this function takes care of the event of deleting an item
    $(".shopping-list").on('click', '.shopping-item-delete', function(event) { //this sets up the event function when clicking delete buttons
    let item = $(this).closest('li'); //declares item var that has a value of the closest list item
    item.remove(); //removes the item
    });
}
function addItem() {
    $('#js-shopping-list-form').on('submit', function(evt){
        evt.preventDefault();
      let listItem = $(evt.currentTarget).find('input[name="shopping-list-entry"]').val();
      let template = `<li>
      <span class="shopping-item">${listItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`
      $('.shopping-list').append(template)
    })
    // $("#js-shopping-list-form").submit(function (event) {
    //  event.preventDeafult();
    //  let newItem = $("#shopping-list-entry").val();
    //  $('shopping-list-entry').val("");
    //  $('shopping-list').append($(newItem).append(text))
    //  console.log(newItem);
    // })
}
function main() {
    checkedItems();
    deleteItem();
    addItem();
}
$(main);
