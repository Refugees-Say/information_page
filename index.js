var values = {
  address: "Loosi Plats 1a, 15165 Tallinn, Harju. Harju County is a region in north Estonia, including the capital, Tallinn. It is well connected and known for its beatiful coastal scenery.",
  support: "Hello Samaira, My name is Liisa. I live in Harju and would like to offer to help you settle in."
}

var address = new Vue({
      el: '#address',
      data: {
        message: values.address
      }
    })

var support = new Vue({
      el: '#support',
      data: {
        message: values.support,
        source: './images/img_avatar.png'
      }
    })
