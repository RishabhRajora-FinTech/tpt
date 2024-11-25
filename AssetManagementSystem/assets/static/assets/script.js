// JavaScript to handle CRUD operations
// Fetch, create, update, delete, and display portfolios

// Fetch portfolios and populate the table
function fetchPortfolios() {
    $.ajax({
        url: '/api/portfolios/',
        method: 'GET',
        success: function(data) {
            $('#portfolio-table-body').empty();
            data.forEach(function(portfolio) {
                $('#portfolio-table-body').append(
                    `<tr>
                        <td>${portfolio.portfolio_name}</td>
                        <td>${portfolio.portfolio_code}</td>
                        <td>${portfolio.school_number}</td>
                        <td>${portfolio.full_name}</td>
                        <td>${portfolio.portfolio_type}</td>
                        <td>${portfolio.status}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editPortfolio('${portfolio.portfolio_name}')">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deletePortfolio('${portfolio.portfolio_name}')">Delete</button>
                        </td>
                    </tr>`
                );
            });
        }
    });
}

// Handle form submission for creating or updating portfolios
$('#portfolio-form').on('submit', function(event) {
    event.preventDefault();
    const formData = $(this).serialize();
    $.ajax({
        url: '/api/portfolios/',
        method: 'POST',
        data: formData,
        success: function() {
            fetchPortfolios();
            $('#portfolio-form')[0].reset();
        }
    });
});

// Edit portfolio
function editPortfolio(portfolio_name) {
    $.ajax({
        url: `/api/portfolios/${portfolio_name}/`,
        method: 'GET',
        success: function(data) {
            $('#portfolio_name').val(data.portfolio_name);
            $('#portfolio_code').val(data.portfolio_code);
            $('#school_number').val(data.school_number);
            $('#full_name').val(data.full_name);
            $('#portfolio_type').val(data.portfolio_type);
            $('#status').val(data.status);
            $('#type_of_emp').val(data.type_of_emp);
            $('#father_name').val(data.father_name);
            $('#mother_name').val(data.mother_name);
            $('#cusp').val(data.cusp);
            $('#entered_by').val(data.entered_by);
            $('#confirmed').val(data.confirmed);
        }
    });
}

// Delete portfolio
function deletePortfolio(portfolio_name) {
    $.ajax({
        url: `/api/portfolios/${portfolio_name}/`,
        method: 'DELETE',
        success: function() {
            fetchPortfolios();
        }
    });
}

// Clear form fields
$('#clear-form-btn').on('click', function() {
    $('#portfolio-form')[0].reset();
});

// Initial fetch of portfolios
fetchPortfolios();
