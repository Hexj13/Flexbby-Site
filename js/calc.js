//Price structure
const price_matrix = {
  "RUB": {
    "Flexbby Cloud": {
      3: 1200,
      6: 1150,
      12: 950,
      24: 0
    },
    "For Azure": {
      3: 0,
      6: 0,
      12: 450,
      24: 350
    },
    "On-Prem": {
      3: 0,
      6: 0,
      12: 350,
      24: 250
    }
  },
  "USD": {
    "Flexbby Cloud": {
      3: 20,
      6: 18,
      12: 15,
      24: 0
    },
    "For Azure": {
      3: 0,
      6: 0,
      12: 8,
      24: 6
    },
    "On-Prem": {
      3: 0,
      6: 0,
      12: 6,
      24: 5
    }
  },
  "EUR": {
    "Flexbby Cloud": {
      3: 18,
      6: 15,
      12: 12,
      24: 0
    },
    "For Azure": {
      3: 0,
      6: 0,
      12: 7,
      24: 5
    },
    "On-Prem": {
      3: 0,
      6: 0,
      12: 6,
      24: 5
    }
  }
}

var currency_symbols = {
  'RUB': '&#8381',
  'USD': '&#36',
  'EUR': '&#8364'
}

var rub_table = `
  <tr>
    <th scope="row">Flexbby Cloud</th>
    <td>10</td>
    <td>` + price_matrix['RUB']['Flexbby Cloud'][3] + ` ` + currency_symbols['RUB'] + `</td>
    <td>` + price_matrix['RUB']['Flexbby Cloud'][6] + ` ` + currency_symbols['RUB'] + `</td>
    <td>` + price_matrix['RUB']['Flexbby Cloud'][12] + ` ` + currency_symbols['RUB'] + `</td>
    <td>-</td>
  </tr>
  <tr>
    <th scope="row">On-Prem</th>
    <td>100</td>
    <td>-</td>
    <td>-</td>
    <td>` + price_matrix['RUB']['On-Prem'][12] + ` ` + currency_symbols['RUB'] + `</td>
    <td>` + price_matrix['RUB']['On-Prem'][24] + ` ` + currency_symbols['RUB'] + `</td>
  </tr>
  <tr>
    <th scope="row">For Azure</th>
    <td>100</td>
    <td>-</td>
    <td>-</td>
    <td>` + price_matrix['RUB']['For Azure'][24] + ` ` + currency_symbols['RUB'] + `</td>
    <td>` + price_matrix['RUB']['For Azure'][24] + ` ` + currency_symbols['RUB'] + `</td>
  </tr>
`
var usd_table = `
  <tr>
    <th scope="row">Flexbby Cloud</th>
    <td>10</td>
    <td>` + price_matrix['USD']['Flexbby Cloud'][3] + ` ` + currency_symbols['USD'] + `</td>
    <td>` + price_matrix['USD']['Flexbby Cloud'][6] + ` ` + currency_symbols['USD'] + `</td>
    <td>` + price_matrix['USD']['Flexbby Cloud'][12] + ` ` + currency_symbols['USD'] + `</td>
    <td>-</td>
  </tr>
  <tr>
    <th scope="row">On-Prem</th>
    <td>100</td>
    <td>-</td>
    <td>-</td>
    <td>` + price_matrix['USD']['On-Prem'][12] + ` ` + currency_symbols['USD'] + `</td>
    <td>` + price_matrix['USD']['On-Prem'][24] + ` ` + currency_symbols['USD'] + `</td>
  </tr>
  <tr>
    <th scope="row">For Azure</th>
    <td>100</td>
    <td>-</td>
    <td>-</td>
    <td>` + price_matrix['USD']['For Azure'][12] + ` ` + currency_symbols['USD'] + `</td>
    <td>` + price_matrix['USD']['For Azure'][24] + ` ` + currency_symbols['USD'] + `</td>
  </tr>
`

var eur_table = `
  <tr>
    <th scope="row">Flexbby Cloud</th>
    <td>10</td>
    <td>` + price_matrix['EUR']['Flexbby Cloud'][3] + ` ` + currency_symbols['EUR'] + `</td>
    <td>` + price_matrix['EUR']['Flexbby Cloud'][6] + ` ` + currency_symbols['EUR'] + `</td>
    <td>` + price_matrix['EUR']['Flexbby Cloud'][12] + ` ` + currency_symbols['EUR'] + `</td>
    <td>-</td>
  </tr>
  <tr>
    <th scope="row">On-Prem</th>
    <td>100</td>
    <td>-</td>
    <td>-</td>
    <td>` + price_matrix['EUR']['On-Prem'][12] + ` ` + currency_symbols['EUR'] + `</td>
    <td>` + price_matrix['EUR']['On-Prem'][24] + ` ` + currency_symbols['EUR'] + `</td>
  </tr>
  <tr>
    <th scope="row">For Azure</th>
    <td>100</td>
    <td>-</td>
    <td>-</td>
    <td>` + price_matrix['EUR']['For Azure'][12] + ` ` + currency_symbols['EUR'] + `</td>
    <td>` + price_matrix['EUR']['For Azure'][24] + ` ` + currency_symbols['EUR'] + `</td>
  </tr>
`

//Vars
var licence_type_active_button
var licence_term_active_button
var license_term_int
var number_of_users
var current_table_description
var currency_symbol = currency_symbols['RUB']
var selected_currency = 'RUB'


jQuery(function($) {
  // Change active license type buttom
  $('.license-type-button').click(function() {
    if (!$(this).hasClass("disable-button")) {
      $('.license-type-button').not(this).removeClass('c-active-button');
      $(this).addClass('c-active-button');
      //Set licence_type_active_button
      licence_type_active_button = $(this).text()
    }
  });
  // Change active license term buttom
  $('.license-term-button').click(function() {
    if (!$(this).hasClass("disable-button")) {
      $('.license-term-button').not(this).removeClass('c-active-button');
      $(this).addClass('c-active-button');
      //Set licence_term_active_button
      licence_term_active_button = $(this).text();
    }
  });
  // Change active selected_currency buttom
  $('#currency-buttons-block .simple-button').click(function() {
    $('#currency-buttons-block .simple-button').not(this).removeClass('c-active-button');
    $(this).addClass('c-active-button');
    //Set selected_currency
    selected_currency = $(this).text().trim();
    // Select currency symbol
    currency_symbol = currency_symbols[selected_currency]
    switch (selected_currency) {
      case 'RUB':
        $('#license_type_table tbody').html(rub_table);
        break;
      case 'USD':
        $('#license_type_table tbody').html(usd_table);
        break;
      case 'EUR':
        $('#license_type_table tbody').html(eur_table);
        break;
    }
    checkResult();
  });
  // Change disable class on type license buttons
  $('.license-type-button').click(function() {
    switch (this.id) {
      case "flexbby-cloud-license":
        $('#three-month-term').removeClass('disable-button');
        $('#six-month-term').removeClass('disable-button');
        $('#twelve-month-term').removeClass('disable-button');
        $('#twenty-four-month-term').addClass('disable-button');
        checkResult();
        break;
      case "on-Prem-license":
        $('#three-month-term').addClass('disable-button');
        $('#six-month-term').addClass('disable-button');
        $('#twelve-month-term').removeClass('disable-button');
        $('#twenty-four-month-term').removeClass('disable-button');
        checkResult();
        break;
      case "azure-market-license":
        $('#three-month-term').addClass('disable-button');
        $('#six-month-term').addClass('disable-button');
        $('#twelve-month-term').removeClass('disable-button');
        $('#twenty-four-month-term').removeClass('disable-button');
        checkResult();
        break;
    }
  });
  // Change disable class on license term buttons
  $('.license-term-button').click(function() {
    switch (this.id) {
      case "three-month-term":
        $('#flexbby-cloud-license').removeClass('disable-button');
        $('#on-Prem-license').addClass('disable-button');
        $('#azure-market-license').addClass('disable-button');
        license_term_int = 3;
        checkResult();
        break;
      case "six-month-term":
        $('#flexbby-cloud-license').removeClass('disable-button');
        $('#on-Prem-license').addClass('disable-button');
        $('#azure-market-license').addClass('disable-button');
        license_term_int = 6;
        checkResult();
        break;
      case "twelve-month-term":
        $('#flexbby-cloud-license').removeClass('disable-button');
        $('#on-Prem-license').removeClass('disable-button');
        $('#azure-market-license').removeClass('disable-button');
        license_term_int = 12;
        checkResult();
        break;
      case "twenty-four-month-term":
        $('#flexbby-cloud-license').addClass('disable-button');
        $('#on-Prem-license').removeClass('disable-button');
        $('#azure-market-license').removeClass('disable-button');
        license_term_int = 24;
        checkResult();
        break;
    }
  });
  // Check changes in input "number of users"
  $('input[name=users]').change(function() {
    number_of_users = parseInt($(this).val().trim())
    if ($(this).val() !== "") {
      checkResult();
    }
    if (number_of_users > 249) {
      $('.total-price-block .description').html('Мы рассчитали для вас стоимость лицензий по базовым тарифам (см. таблицу).</br>Но вам мы готовы предложить индивидуальные условия.</br>Оставьте заявку, и мы перезвоним!')
    }
    if (number_of_users < 250) {
      $('.total-price-block .description').html('Мы рассчитали для вас стоимость лицензий по базовым тарифам (см. таблицу).</br>Оставьте заявку, чтобы мы определили стоимость внедрения системы Flexbby One специально для вас.')
    }
  });
  // Spaces after 3rd number
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  //
  function change_table_description(text) {
    $('.table-description').html(text);
  }
  // Check result
  function checkResult() {
    if ($('#license_type').find('div.c-active-button').length !== 0 && $('#license_term').find('div.c-active-button').length !== 0 && $('input[name=users]').val() !== "") {
      total = number_of_users * price_matrix[selected_currency][licence_type_active_button][license_term_int] * license_term_int;
      discount_price = Math.round(total - (total * 0.3));
      $('#price-without-discount').html(numberWithSpaces(total) + " " + currency_symbol);
      $('#discount-price').html(numberWithSpaces(discount_price) + " " + currency_symbol);
      $('#total_span_type').html(licence_type_active_button);
      $('#total_span_numOfUsers').html(number_of_users);
      $('#total_span_term').html(licence_term_active_button);
      $('.subtitle').css('display', 'block');
      //
      //   // Data from page to json
      //   json_price = JSON.stringify({
      //     "number_of_users": number_of_users,
      //     "license_term_month": license_term_int,
      //     "licence_type": licence_type_active_button,
      //     "selected_currency": selected_currency,
      //     "price_without_discount": total,
      //     "discount_price": discount_price,
      //   })
      //   console.log(json_price);
      //
    }
  }

});
