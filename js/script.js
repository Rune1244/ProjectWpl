document.addEventListener('DOMContentLoaded', function() {
    const sortButton = document.getElementById('sortButton');
    const overviewButton = document.getElementById('overviewButton');
    const sortedTable = document.getElementById('sortedTable');
    const formContainer = document.getElementById('form-container');
    const miniFigSorting = document.getElementById('miniFIgSorting');

    // Standaard wordt alleen het formulier weergegeven
    formContainer.style.display = 'block';
    sortedTable.style.display = 'none';
    miniFigSorting.style.display = 'none';

    sortButton.addEventListener('click', function() {
        // Bij het sorteren wordt alleen de minifiguren sectie weergegeven
        miniFigSorting.style.display = 'block';
        formContainer.style.display = 'none';
        sortedTable.style.display = 'none';
    });

    overviewButton.addEventListener('click', function() {
        // Bij het bekijken van het overzicht wordt alleen de tabel weergegeven
        sortedTable.style.display = 'block';
        formContainer.style.display = 'none';
        miniFigSorting.style.display = 'none';
    });

    // Bij het laden van de pagina wordt alleen het formulier weergegeven
    window.addEventListener('load', function() {
        formContainer.style.display = 'block';
        sortedTable.style.display = 'none';
        miniFigSorting.style.display = 'none';
    });
});
