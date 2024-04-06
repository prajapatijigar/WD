 let api_keys = 'KmUXTTu6hRM'

 let fetchingSong = fetch(`https://www.youtube.com/watch?v=${api_keys}&list=RDGMEMQvslUU5QcbUzJ7HyWoWAAAVMV0eQyoIcH6U&index=4&ab_channel=RaghwendraDubey`).then((res) => res.json()).then(data => {
      console.log(data);
})

// let data = 'https://www.youtube.com/watch?v=KmUXTTu6hRM&list=RDGMEMQvslUU5QcbUzJ7HyWoWAAAVMV0eQyoIcH6U&index=4&ab_channel=RaghwendraDubey'
//  console.log(data);