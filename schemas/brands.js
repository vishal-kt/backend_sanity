export default{

    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'Name',
        type: 'string'
        }, 
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true
        }
        }, 
        {
        name: 'order',
        title: 'Order',
        type: 'number'
        }
    ]

};


