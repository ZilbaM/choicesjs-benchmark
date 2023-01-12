const choice_1 = new Choices(document.getElementById('choice-1'), {
    allowHTML: true,
    delimiter: ';',
    editItems: true,
    maxItemCount: 5,
    removeItemButton: true,
    items: ['a', 'b', 'c']
})