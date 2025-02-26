/** @type {import ('tailwindcss').config}*/


export default{

    content:[

        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme:{
        extend:{
            backgroundImage:{

                'working-img': "url('/work-proceess.webp')"
            },


            fontFamily:{
                'primary' :["poppins","sans-serif"],
                'secondary':["Syne","sans-serif"],
            },
            colors:{
            'heroBg':"#0e1122",
            'para':"rgb(0 0 / 80%)",
            'primary': '#06a055'
            }
        },
    },
   
    plugin:[],
}

