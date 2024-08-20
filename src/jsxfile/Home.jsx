import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img  className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon" />
        
        <div className="home__row">
            <Product 
            id="1"
            title= "Hawkins Stainless Steel Contura Induction Compatible Inner Lid Pressure Cooker, 1.5 Litre, Silver (SSC15)"
            price={99.99}
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rM8DfzBNHTN1pwSnNo5gIqPwCz4CdjeTXPpwpN9ViydyC3KF-xpaJoLU1DpM'
            rating={5}
            />

            <Product 
            id="2"
            title= "Fire TV Stick with Alexa Voice Remote (includes TV controls), HD streaming device."
            price={29.99}
            image='https://m.media-amazon.com/images/I/51Da2Z+FTFL._AC_SL1000_.jpg'
            rating={5}
            />
            
        </div>

        <div className="home__row">
            <Product 
            id="3"
            title= "Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control or Bose Noise Cancelling Headphones 700, Bluetooth, Over-Ear Wireless with Built-In Microphone for Clear Calls & Alexa Voice Control."
            price={199.99}
            image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMTEhIVFRMXFhUYFRUVFRUWFRgVFRcXFhUVFRcYHSggGRolGxcWIjEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGQ8QGjUlHyMvNys3MTctLS83OC03Ny0rKzc3LTQtLTcrLS0tNTUrLS0rLTU3LTctKy0tNTgrNy0uNf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQMEBgcIAgH/xABKEAABAwICBgYFCQUGBQUAAAABAAIDBBEhMQUHEkFRYQYTInGBkTJSgqGxFCNCYnKSwdHwJHOissIzQ1Nj4fEIJaOzwxU0RIOE/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAiEQEBAQABAwMFAAAAAAAAAAAAAQIRAxIxBCFBEzIzcYH/2gAMAwEAAhEDEQA/AN4oiICIiAiIgIiICIsU6Z9PKbR42XHrJyMIWnHkXn6A9/AIMrWP6X6bUFPcS1LNoZtZeRwPAhgNvGy0L0p1g1lYSHyGOLdFHdrbfW3v9q44WWJvm5oN/wBTrkoWmzYp387RAe99/cqLNdFJvp5/Axfi8LQZmQTBB0jQ606CTfKw/Xa0D7wcR71kFN0mpXgESjHK4IHna3vXKTJeBt3KS0bpqWE3a823gZHvGR+PNB1dBUsf6D2u+yQfgqq0HoTpY2Swcdh+GIyJ+LT3+azSg6UzM+mXDg/te84+9BshFjmj+lsb7CQFh4jFv5j3rIIpWuAc0gg5EG4Qe0REBERAREQEREBERAREQEREBERARFrzWv06+RR/J4HftMjcXD+6YfpfaO7z4XC11m6yRS7VNSOBqMpJMxFyG4v+HfloWsrnOcXOcXOJJLnG5JOZJOatqurJJN7k4knMniVYukJQXL6hU9slU2MUz0e6Pz1crYaeMveeGAaN7nuya3me7E2CCNa0lTmguilXV/8AtqaWUesG7Mfd1j7Mvyut4dDdUFLTBslXapmz2SPmGnkw+mebsMMAFsiNgaAAAAMAALADgAg58oNSde7GSSCLkXue7xDWW96uKjUjXNF46inefVPWM9+yVv1EHKGmtAVlE61VA+LcH2DonchI27T3XvyUroLT5wZIcNxO782/Duy6VqqZkjHMkY17HCzmuAc0g5gg4ELTGsLVYYQ6q0eHFgu59OLucwb3Q73NHqG54eqg8Q1amtE6dkiN2O7wcWnvC1xoHSu0A0nu/Lu4eXBZBFOg3PoTTkdQLDsyAYsPxbxClVpWir3NIc1xBBuCMwVs7oxp9tS2zrCVo7Q9Yes38RuQTiIiAiIgIiICIiAiIgIiICIiCF6X9IWUNLJUPxIwY315Hei38TyBXKWn9LyTyySyu2pHuLnHmdw4AZAclneurpZ8oqjCx3zNOSwWydLlI/w9Edx4rVuJKDziVVZGvTI1JaJ0a+aRkUbS573BrWjeSbAfrJBIdDeik1fO2GEW3vkIu2Nm9zuPIbz4kdO9FOjNPQQCGBvN7zbbkd6zz8BkNyodB+i0ej6ZsLbGQ2dNIB6b7Y2+qMgOHMlZCgIiICIiAiIg0lrc6F/Jn/L6VlonO/aI25Me44StAya458HWO82xqgq9toN8d/5royspWSsfHI0OY9pa9pyLXCxB8FzbpfRTtH1stK8ktB2onH6ULydh3eMQebXIJaKZSmjdIuje17DZzTcH8DyWPsermKVBvbQmlG1ETZG9zm+q4Zj9biFfrU/QjTvUThrj83JZruAP0XeBNjyJ4LbCAiIgIiICIiAiIgIiICxvWF0g+RUMswNpCOri/ePuAfAXd7JWSLRH/EBp3anipWnsws23j/Mkyv3MH8aDUFXIXOzv+sykca+xRq5YxB5jjW7tRnRWwdXSNxxZBfykk/pHtcVqbQmjXzzRwxjtyPaxvIuNrnkMzyBXV+i6BkEMcMYsyNjWt7mi1zzOfigukREBERAREQEREBaz146C6ylZWMHzlM7t2zMMhDXeTtk8htLZit9I0bJopIZBdkjHMcPqvBafcUHNtHNtNB/X6tZXjHqLp6d0MkkD/Sjc5jr+sxxF/HFXzXIJCKRbl6E6W+UUrS43ezsP4kgYOPeLeN1pGNyzbVppPq6nqiezK23ttu5p8toeIQbXREQEREBERAREQEREHxzgASchiVyJ0s0oaqrmnP8AeyOePsXtGPBgaPBdN6wK/qdHVTwbExljT9aUiMe9y5idEHTAWFgHE8xgBfxJ8kFkxirNYpMUTOHvK9NoW8/NBnmovQ/WVclQ4YQMs395LdoI7mh/mFvRYVqj0QIKBrsdqZ7pDfhgxo7rNv7RWaoCIiAiIgIiICIiAiIg0JrW0f1GlHPA7M7GS8toDq3geDAfbUE0rYmvei+bo57YtkfETykbtf8Aj961vE64B5ILphV/o+rMcjJG5sc1w72kG3uUY0q4jKDoqCUPa17TdrgHA8iLhVFj/QKr6yhgJzaCw+wS1v8ACGrIEBERAREQEREBERBrvXbV7NHFGP7ydt/ssY5382wtEULxtyPJFuyM7Z9s4+0FtvXzU9ukbfBsdQ8jmTEGn+F3mtT6Ow2hY4uJvY2s0uaMePo4IJiKsj/w2ntE37Jtf6IwtbluXyR4cRsttha3O5PwIF99ladWDmAfAKT6M07X1lPGALulhuAPol9j8Sg6O0TSdVBFEPoRsb91oBV2iICIiAiIgIiICIiAiIgwjXLT7Wi5nWxjfC8cvnGtJ+64rS9M7shb91ixbWi64cKeVw72NLx72rn2gd2B+twQXjSq7CrdqrMQbZ1S1F6eZnqyh3g9oHxaVnS1nqhl7dS3i2M+RePxWzEBERAREQEREBERBpDXm69ZG3hTN/jkkH4Ba8ogNhthmAfPFZ3rud+3/wD54PfLIsEof7OP7DfgEFwFk2rqLa0jSjg8n7rHH8FjIWX6rB/zKDul/wC09BvtERAREQEREBERAREQEREEV0rbehrAd9POPONy5t0Wfmx4fALo/pjLs0Fa7hTVB8onLm/Rf9mPD4BBfhVWKiFWYgz/AFSO/aZRxhv5Pb+a2qtVapB+0yn/ACT73s/JbVQEREBERAREQEREGitejLVrDxgg900iwKh/s2fZb8Atj/8AEBHaWnfxhf8A9KRrv61rmkPYHK4+6SPwQVwsg6C6Wipq6GWaRsbGl+05xwF2OHxIWFVmkTiG4DjvPdwHv7lZwNJN3Z/DuQdIVOtnRzTZjpZcbXZEQPDrC26rUWtDR77Avkjv68Z+LC5c8sXvrEHV2j9Iwzt2oZWSN4scHW77ZFXS5T0dpaWF4fFI5jxk5pIPdhmOS210M1ptfsxV1mnITgWb/wDY0ej9oYchmg2ki+McCAQQQRcEYgg5EFfUBFbaSr4oInzTPbHGwXc9xsAPxPLeue9YGtaesLoaUugpcrgls0o4uIxY0+qM95xsg270m1k0NGSwyGaUYGOGzi0/XcSGt7r35LCarXNK4/NU8bB9dznn3bK0tG/gqzZCg3LSa3qi/bhhcOW2w+dz8FPaN1rxOIEsDmDix4f5ghq0fDRBtnVM4gbuY1plncOTAQG97iO5TWjpaD6MFRL9aaoDP4IWYfeKDc/TvTsEuh62SGRr2mEswzBlIjAc04j0t60do8WYP1uCu+kT4hARE2SMvc1uz122wi+1YhzdrNoPpZq3phgEFyFWjVFquIgg2Lqij+cqHcGMH3nOP9K2asC1S09op38Xtb91t/61nqAiIgIiICIiAiIg1dr5odunppLZPkivwEse18YgtHulPV2yuSfvHa/E+S6W1oaPM2jpw0XczYkaBn2HAut7O0uZ688OfwQWbhl5+G5XcIVu8Yq6gQXICoTSgL7pCbYZdQD53HMoJcVCuIahQDJSruKVBt/VvrAdTFsFQ4upicDmYid7eLOLfEbwd11NfFHE6Z8jWxNbtmQkbOxa+1feLLkamnUtpXpTUSUrKIyH5O121s7yfotJ9QHEDieQsF1rJ6cyaSms27KSM/MxZbRy62Qb3HcPog2zuThoCqlqvdE6MfO/YYMgXOcfRYxvpPcdwCC2p4C44f6DmVNUFO1uIxdx/Lgo+sqWh2xF/Zg+kfSefWPAcB+heUUqC30tT3xVvoyp2TZTU8dwsdnYWOQTekqjbdE3hdx/D4FSEOQUDQnacXHgAPH/AECnYUF0xXULVbxhSVBTlzmtaLucQB3k2A80G4dXtL1dDHhYvLnnxdZp+6GrJFQoqYRxsjbkxrWjuaAB8FXQEREBERAREQEREGL6xNJ9TSFgPblJY23BrXSPPdZtvaC5ircvNbo1laS62uEQPZhZse3MLv8A4TGPArTVUMEFCTcq0JxVAG7QvcZQe9Ksu1vf+Ch5ICFPzi7e5WjokEKQq0D9yrVNOrPJBKU+arELzSN7IvmcfDcqhQfIoXPc1jGlz3ODWtGJc5xs1o5kkLL9OxNpIfkERBkuHVsrcduYZQNP+HHlzdfLFeuh1P8AJoHaRcPnXF8NEDufa01T7AOyPrOPIqKmbf8A1QY/PHYqvRSqvVwqPabFBkkLrhRek42ueGA9onG27iT4LzJVENztfeM/Dh3qho03eX/RGAHF35Ke7m8Rtel257tJAtAe1jd2J8cB7lKxBR9JCblxzJUnGqYrmALNdXdD1lWwnKMF59nBv8RCwuBbD1ZVAZPsnORrmtPMDbt5Md5INooiICIiAiIgIiICIiDn/pU+76ycOO2ypebXt2A958cGAd11g2l4tmR43XuPsuxb7iFm/SaPZqaqM5ddLcbiC9xFxvwKxjT0YfFHM36LnQSA2uHtG3GfaYSB+6KDHGGxI8fNelTl48PgvYNwgvKZ9xYrwRbBW8UliryQbQ2hnvQW0rVGugu8Dif91JkqlC3t34A/kguCq2itHPqZ4qeL05XhjTuF/SeeTWguPcqDzgsj6IHqKerrSbPsKSn/AHk42pnjm2EYfbQSHSKujkkEcGFNA0Q04/y48NvmXm7ic8RwUUQqEb1Xa5BbTxKLewA3PgpPSEwaLbznyH57v9lCCMyvs3AW7RGQbw7+CjV59o9XRzMz6uv5FAl0hAHid3OymaSm2QAqbYQ3ACwVxS3Lg1oJcSAABcknIAbyqk4Yb3d3mpGJqkqPRsjwHWaxhyfI9kbD9kvI2vC6pRFsWDQ2SYek42dDGeAGUrx90cziPjwXEukc6RxzLzf3ZLqExUaFMTNs1FK4fUlLvC4Zb3qd6DytNTBiLh4c3EEEFrmbTXNJDhZ7hcFYawAXGy2xFi2wsRzAWW6N0YGUTa2D0oHteWjH0XAPb4i3gcd1g3Qi8xvDgHDIgEdxxC9ICIiAiIgIiICIiDS2s+F1PpDrWGxeI5Wng9vZPfiwH2lhlMGSSTRGzI6hoaL5Mma4ugkPABx2CfUketu64tCmWlbUMF3U5Jd+6fYPPgQw8gHLSrIWSNka4kO2bs4Egjaad4OzcjmLHO4DHqiMsc5rwWuaS1zTmHNNnNPMEEK2a7ZNvLuWR6YiM8XynOWPZjqvrZNiqB9rssf9cA/TWNvF8N+78kFV/FVqSptgrKOXcV8fhiEEtPFftN8R+St6XEu8F4pK22BV7cHEZnNBb1LlN6Qn2KWigByjfO8cXzuuL8w1oHioDSGSlNPOvO8DJuywcgxob+BQeI5VdRzKJDl76y+HH4b/AMvFct4VnPdZJ8vFfUnEkZ4+G4fripTRtJsMx9J2Lu/h4KHHalF8h2vLL3qdjnU4ny39Tr3mJ4j5LEriNhiPVswmc28jt8UbhgxvB7gcTmAQN5t6ZUNja+ZwBEYFmnJ0hwjZzF8SODSvuj4S1t3m8jyXyE5l7jc38SfereZcxMDQABYBe15C9BB6CzfohJ/yzSgJs0MuPtFjh/S1YQFmvREh9P8AJBi6pnZt8om2c8H2I5PNBtfRkZbDE05iNgPeGgFXKIgIiICIiAiIgIiIPMkYcC1wBaQQQRcEHAgjgueen/RB9BN2QTTSE9S/O2/qnH1huvmBfMG3RCttI0Ec8bopmB8bhZzXZHh3EZgjEIOXqSWRhL42h1gQ9rgSx0buy9jx6rgbe/MXEDpGBocTHfYOIDvSb9Vx3kZX3rbfSzV/NRP6+k2pYAbkYmRgzs8N9NnMZDPLaWu30jSDzxvzsBfyAQYvIL9/xXlsilKzRj2guAu0ZkZDmeCi3t4+aDyeSuqGos4A5HD8lZkEfmvTH8UExO3tx8Ntn8wUhpJnzsv7x/8AMVFzP249oZj4hT2kWgyOcMn2eDykAeP5kEQ6JeYxZ1zuB91z+CvjGrWrjsL/AK/Wanfhv6b8kRhk2dp3MDyF1Whr+aoVTex7Z/lCs2MJIHEgea7PDPqfff2ys3c+niOQBneOJyYD3W/iU2omOMitkuLfMxFvc5kbhbzUquoXNFUdW7a2Wu5OFx+t3irw1ED7bUfVm+bcgLjIDfba3HG27KMCqQxlzg1oLnEgNaBcknIADMoJai0N18kccD9p7z6O9osS5zuAAHDgMzZbC1bdG+pdNM47R2nRsO7AgSFvIFoYObX7nKl0Y6POpmmBjrVkrQaiRuPyaAnBrT/iOsQOJBdiGY57S07Y2NjY0NYxoa1oyDWiwA8EFVERAREQEREBERAREQEREBYn0j1fUdWS8tMMpxMkNmkn6zSC13fa/NZYiDTlRqkrI3bVPWROtltsfEbcCW7YPwPBY9pPVNWvxNPGx/rU0jHRO5uifsFnezD6i6ERByXpfV7pKnxdRylvrRNMre8hlyB9oBQh0ZODsupZdrh1Tw7ysuz0QcrdG+gekag2iopGNJxfNeJg59sXPsgqpPSSRXp52Fk9P2HNdmYiSY3t9YC5bcbtjibdSqD6UdE6WvYG1EfabfYlYdmVl89l3Dkbg7wg5u2QvUWyCQ4XYRZw5cRzGfhzWe6W1OVjT+zVMMrdwlDongbhdoc1x59nuWP1GrnTDP8A4of9iaI+W04FK7m2XmMU0lohzASO1GbFrhj3XtyOeRwUS6nWeQ9GNKxAg0UoGN2FgljN89nqyS2/DJQNd0Xri7sUFQ2/0erkcPAlt7cipzOPZr1dTd7ozjRvRz/1KngqqZw+UwMMM8RIBfES50LmkkAOHo44HYIv2cYet0bNCSJYnsP1mkDwORVboP0W07BKJIad0Q4yPZHgbXaWuuS07wW7r4HFbC0r0a0nVtAmFJGd7mvl/l2XfFUxa80ZomWdwaxtr/ScbNH4nwBWyOi+hI4CWUtpqvKSpe28NPfNrQD2n2+gDtesWghXOgNXQiA+UVD5OLI7xMPJzgS8juLQd4WbUtMyNjY42NYxos1rQGtA4ADAIKGjNHNgZstJcSS573G75HnN7zvOAysAAAAAAFeIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q=='
            rating={4}
            />
            
            <Product 
            id="4"
            title= "ASUS ZenBook 14 Ultra-Slim Laptop 14” Full HD NanoEdge Bezel, Intel Core i7-1165G7, 16GB RAM, 512GB PCIe SSD, NumberPad, Thunderbolt 4, Wi-Fi 6, Windows 10 Home, Pine Grey"
            price={749.99}
            image='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEqbV8tesPGlzlbIbI90uRLbpARHDCNwYJxOhSpbLApxXc44_NUWx08c3w6pd0'
            rating={5}
            />

            <Product 
            id="5"
            title= "Samsung Odyssey G5 32-Inch Gaming Monitor, WQHD (2560x1440), 144Hz, Curved, 1ms, FreeSync Premium, LC32G55TQWNXZA or AOC C32G2 32 Curved Frameless Gaming Monitor FHD"
            price={349.99}
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dOX8iP3Gkxu8b6xTK8cgr72hwINNrRmijCDh8jMB-VrwfAA_cQJrbXFgkUMD'
            rating={4}
            />
        </div>

        <div className="home__row">
            <Product 
            id="6"
            title= "Samsung 27-inch(67.8cm) Odyssey OLED G6 Gaming, 360Hz, 0.03ms GTG, Height Adjustable, Dynamic Cooling, Sleek Metal Design, Glare Free, AMD FreeSync Premium Pro (LS27DG600SWXXL, Black)"
            price={749.99}
            image='https://tse2.mm.bing.net/th?id=OIP.mz05ISNFrcoWpRtmpPvL3QHaEK&pid=Api&P=0&h=180'
            rating={5}
           />
        </div>
        
        </div>
    </div>
  )
}

export default Home
