import SearchIcon from '@mui/icons-material/Search';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ListIcon from '@mui/icons-material/List';
import RemoveIcon from '@mui/icons-material/Remove';
import EuroIcon from '@mui/icons-material/Euro';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Image from 'next/image';
import pic from './sampe.png';
import PanoramaFishEyeTwoToneIcon from '@mui/icons-material/PanoramaFishEyeTwoTone';


export default function Home() {
  return (
    <>
        <div className="flex h-[6rem] justify-between items-center">  {/* header start */}
          <div className="text-[#EEF7F7] w-[15rem] h-[2rem] flex justify-between rounded-xl  bg-blue-200 pt-[6px] pr-[16px] pb-[8px] pl-[16px] ">
            <span>Suchen</span>
            <span><SearchIcon /></span>
          </div>

          <div className="flex justify-between items-center gap-[24px] ">
              <span className='flex items-center font-bold h-[20px] '>< EnergySavingsLeafIcon className='text-blue-200'/>Rezept elosen</span>
              <span className='flex items-center w-[] h-[20px]'><EnergySavingsLeafIcon className='text-blue-200'/>Live Bestand</span>
              <span className='flex items-center w-[] h-[20px]'><EnergySavingsLeafIcon className='text-blue-200'/>Videosprechstunde</span>
              <span className='flex items-center w-[] h-[20px]'><EnergySavingsLeafIcon className='text-blue-200'/>FaQs</span>
              <span className='flex items-center w-[] h-[20px]'><EnergySavingsLeafIcon className='text-blue-200'/>Kontakt</span>
              <span className='flex items-center w-[] h-[20px]'><ShoppingCartIcon className='text-blue-500' /></span>
              <span className='flex items-center w-[] h-[20px] rounded-tl-[30px] rounded-br-[30px] border border-yellow-300 p-4 bg-yellow-100'>Anmelden</span>
          </div>

        </div>

        <div className='flex justify-between'>{/* BreadCrumbs start */}
          <div className='text-sm h-[6rem] justify-between items-center'>
            <span className='text-sky-400/100 p-1'>Home</span> <ArrowRightAltIcon/>
            <span className='text-sky-400/100 p-1'>LiveBestand</span> <ArrowRightAltIcon/>
            <span className='font-bold p-1'>Cannabis Blüten</span>
          </div>
          <div className="flex flex-col">
            <span className='p-4'>GKV mit Kostenübernahme?</span>
            <span className='rounded-tl-[30px] rounded-br-[30px] border border-blue-800  flex items-center justify-center w-[15rem]'>Preisoptionen</span>
          </div>
        </div>

        <div className='flex justify-between h-[5rem]'>{/* H2 start */}
          <span className=' text-2xl'> <EnergySavingsLeafIcon className='text-blue-300'/> Blüten</span>
          <div className='flex'>
              <div className='w-[350px] flex justify-between text-blue-300 border-2 border-gray-300 rounded-xl bg-gray-300 h-[2rem]'>
                <span className='pl-[1rem]'>Suchen</span>
                <span><SearchIcon /></span>
              </div>
              <div className='w-[300px] pl-[2rem] ml-4 border-2 border-gray-300 rounded-md h-[2rem] bg-[#62C3C6]'>
                <span>Sortieren nach</span>
                <span className='text-blue-500'><KeyboardArrowDownIcon /></span>
              </div>
              <div className='w-[270px] ml-4 border-2 border-gray-300 rounded-md h-[2rem] bg-[#62C3C6]'>
                <span>Verfügbarkeit</span>
                <span className='ml-2 text-blue-600'><ToggleOnIcon /></span>
              </div>
              <div className='w-[40px] ml-5 border-2 border-gray-300 rounded-md h-[2rem] bg-[#62C3C6]'>
                <span><ListIcon /></span>
              </div>
          </div>
        </div>

        <div className='flex'>

          <div className='w-52 h-100'> {/* Filter start */}
              <div className='flex justify-center font-bold border-2 border-gray-300 rounded-md bg-blue-100 text-xl'>Filter</div>

              <div className='mt-6'>
                <div className='flex justify-center font-bold'>Preis</div>

                <div className='mt-3'>
                  <RemoveIcon className='text-blue-300'/><EnergySavingsLeafIcon className='text-blue-500'/><RemoveIcon className='text-blue-500 font-bold'/><EnergySavingsLeafIcon className='text-blue-500'/><RemoveIcon className='text-blue-300'/><RemoveIcon className='text-blue-300'/><RemoveIcon className='text-blue-300'/>
                </div>
              </div>

              <div className='h-15 mt-4'>
                <span className='w-24 border-2 border-gray-300 rounded-md bg-gray-300 pl-4 pr-5'>5<EuroIcon className='text-sm'/></span>
                <RemoveIcon/>
                <span className='border-gray-300 rounded-md bg-gray-300 pl-4 pr-5'>10<EuroIcon className='text-sm'/></span>
              </div>
              <hr className="border-blue-300 border-t-2 my-4"/>

              <div className='h-52'>
                <span className='flex  justify-center font-bold'>Hersteller <KeyboardArrowUpIcon className='ml-9'/>
                </span>
                <div className='mt-4'>
                  <CheckBoxOutlineBlankIcon className='text-blue-400'/><span className='ml-2'>ADREXpharma</span><br/>
                  <CheckBoxOutlineBlankIcon className='text-blue-400'/><span className='ml-2'>Aurora</span><br/>
                  <CheckBoxOutlineBlankIcon className='text-blue-400'/><span className='ml-2'>Avaay</span><br/>
                  <CheckBoxOutlineBlankIcon className='text-blue-400'/><span className='ml-2'>Bedrocan</span><br/>
                  <CheckBoxOutlineBlankIcon className='text-blue-400'/><span className='ml-2'>Cannamedical</span><br/>
                </div>
                <span className='mt-4 flex justify-center rounded-tl-[30px] rounded-br-[30px] border-4 border-yellow-200'>mehr anzeigen</span>
              </div>

              <hr className="border-blue-300 border-t-2 mt-8"/>

              <div className='mt-8'>
                <span className='flex justify-center font-bold'>THC Gehalt</span>

                <div className='mt-3'>
                  <RemoveIcon className='text-blue-300'/><EnergySavingsLeafIcon className='text-blue-500'/><RemoveIcon className='text-blue-500 font-bold'/><EnergySavingsLeafIcon className='text-blue-500'/><RemoveIcon className='text-blue-300'/><RemoveIcon className='text-blue-300'/><RemoveIcon className='text-blue-300'/>
                </div>
              </div>

              <div className='h-15 mt-4'>
                <span className='w-24 border-2 border-gray-300 rounded-md bg-gray-300 pl-4 pr-5'>11 %</span>
                <RemoveIcon/>
                <span className='border-gray-300 rounded-md bg-gray-300 pl-4 pr-5'>18 %</span>
              </div>

              <hr className="border-blue-300 border-t-2 mt-8"/>

              <div className='mt-8'>
                <span className='flex justify-center font-bold'>CBD Gehalt</span>

                <div className='mt-3'>
                  <RemoveIcon className='text-blue-300'/><EnergySavingsLeafIcon className='text-blue-500'/><RemoveIcon className='text-blue-500 font-bold'/><EnergySavingsLeafIcon className='text-blue-500'/><RemoveIcon className='text-blue-300'/><RemoveIcon className='text-blue-300'/><RemoveIcon className='text-blue-300'/>
                </div>
              </div>

              <div className='h-15 mt-4'>
                <span className='w-24 border-2 border-gray-300 rounded-md bg-gray-300 pl-4 pr-5'>1 %</span>
                <RemoveIcon/>
                <span className='border-gray-300 rounded-md bg-gray-300 pl-4 pr-5'>5 %</span>
              </div>

              <hr className="border-blue-300 border-t-2 mt-8"/>

              <div className='h-16'>
                <span className='flex justify-center font-bold mt-8'>Genetik</span>
                <div className='flex mt-4'>
                  <span className='w-14 flex justify-center border-2 border-blue-200 rounded-md bg-teal-300	'>Indica</span> 
                  <span className=' ml-2 flex justify-center w-14 border-2 border-blue-200 rounded-md bg-teal-100	'>Sativa</span> 
                  <span className='ml-2 flex justify-center w-14 border-2 border-blue-200 rounded-md bg-teal-100	'>Hybrid</span></div>
              </div>
              <hr className="border-blue-300 border-t-2 mt-8"/>
              <div className='h-16'>
                <span className='flex justify-center font-bold mt-8'>Bestrahltung</span>
                <div className='flex mt-4'>
                  <span className='w-20 flex justify-center border-2 border-blue-200 rounded-md bg-teal-300	'>bestrahlt</span> 
                  <span className='  flex justify-center w-29 border-2 border-blue-200 rounded-md bg-teal-100	'>nicht bestrahlt</span></div>
              </div>
              <hr className="border-blue-300 border-t-2 mt-8"/>

              <div className='mt-8 h-6  flex justify-center font-bold'><span>Terpene <KeyboardArrowDownIcon className='ml-9 text-teal-600'/></span></div>
              <hr className="border-blue-300 border-t-2 mt-8"/>
              <div className='mt-6 flex'>
                <span> <CloseIcon className='text-teal-400 '/>alleFilterzrücksetzen </span>
              </div>

          </div>

          <div className='grid grid-cols-3 gap-4 ml-9'> 
            
            <div className='w-94 h-100  '>
              {/* main start here */}
              <div className=' border-4 rounded-tl-3xl rounded-br-3xl border-teal-300 ' >
                <span className='m-4 text-xs border-4 rounded-md bg-red-200'><PanoramaFishEyeTwoToneIcon className='text-sm text-red-600'/>nicht lieferbar</span>
                <div className='flex justify-center'>
                <Image src={pic} alt="bottle" width={250} height={250} />
                </div>
                <hr className="border-2 mt-4 border-teal-300 bg-teal-200 "/>

                <div className='bg-teal-200'>
                  <div>
                    <div className=''>
                        <div className='border-2 bg-teal-400 ml-4 w-14 border-2 rounded-md'>Canify</div>
                    </div>
                    <div className='mt-4'><span className='bg-white border-2 rounded-md ml-4'>THC 18% </span> <span className='ml-4 border-2 bg-teal-400'>CBD 1%</span><AcUnitIcon className='ml-4 text-teal-500'/></div>
                    <div className='mt-4 ml-4'>
                      <span className='text-teal-900 font-bold'>Cannabis Flos 18/1 PT <br /> Mango</span>
                    </div>
                    <div className='mt-4'>
                      <div className='flex justify-between'>
                        <span className='ml-4'>Kultivar</span>
                        <span className='mr-4'>Mango</span>
                      </div>
                      <div className='flex justify-between mt-1'>
                        <span className='ml-4'>Genetik</span>
                        <span className='mr-4'>hybrid</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <span className='font-bold'><EuroIcon className='text-teal-400 '/>11,66 <br />  <span>pro Gramm</span></span>
                      <span className='ml-6 w-20 h-5 text-sm border-2 rounded-tl-3xl          rounded-br-3xl bg-yellow-300'>in den Warenkorb</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className='w-94 h-100  '>
              {/* main start here */}
              <div className=' border-4 rounded-tl-3xl rounded-br-3xl border-teal-300 ' >
                <span className='m-4 text-xs border-4 rounded-md bg-red-200'><PanoramaFishEyeTwoToneIcon className='text-sm text-red-600'/>nicht lieferbar</span>
                <div className='flex justify-center'>
                <Image src={pic} alt="bottle" width={250} height={250} />
                </div>
                <hr className="border-2 mt-4 border-teal-300 bg-teal-200 "/>

                <div className='bg-teal-200'>
                  <div>
                    <div className=''>
                        <div className='border-2 bg-teal-400 ml-4 w-14 border-2 rounded-md'>Canify</div>
                    </div>
                    <div className='mt-4'><span className='bg-white border-2 rounded-md ml-4'>THC 18% </span> <span className='ml-4 border-2 bg-teal-400'>CBD 1%</span><AcUnitIcon className='ml-4 text-teal-500'/></div>
                    <div className='mt-4 ml-4'>
                      <span className='text-teal-900 font-bold'>Cannabis Flos 18/1 PT <br /> Mango</span>
                    </div>
                    <div className='mt-4'>
                      <div className='flex justify-between'>
                        <span className='ml-4'>Kultivar</span>
                        <span className='mr-4'>Mango</span>
                      </div>
                      <div className='flex justify-between mt-1'>
                        <span className='ml-4'>Genetik</span>
                        <span className='mr-4'>hybrid</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <span className='font-bold'><EuroIcon className='text-teal-400 '/>11,66 <br />  <span>pro Gramm</span></span>
                      <span className='ml-6 w-20 h-5 text-sm border-2 rounded-tl-3xl          rounded-br-3xl bg-yellow-300'>in den Warenkorb</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className='w-94 h-100  '>
              {/* main start here */}
              <div className=' border-4 rounded-tl-3xl rounded-br-3xl border-teal-300 ' >
                <span className='m-4 text-xs border-4 rounded-md bg-red-200'><PanoramaFishEyeTwoToneIcon className='text-sm text-red-600'/>nicht lieferbar</span>
                <div className='flex justify-center'>
                <Image src={pic} alt="bottle" width={250} height={250} />
                </div>
                <hr className="border-2 mt-4 border-teal-300 bg-teal-200 "/>

                <div className='bg-teal-200'>
                  <div>
                    <div className=''>
                        <div className='border-2 bg-teal-400 ml-4 w-14 border-2 rounded-md'>Canify</div>
                    </div>
                    <div className='mt-4'><span className='bg-white border-2 rounded-md ml-4'>THC 18% </span> <span className='ml-4 border-2 bg-teal-400'>CBD 1%</span><AcUnitIcon className='ml-4 text-teal-500'/></div>
                    <div className='mt-4 ml-4'>
                      <span className='text-teal-900 font-bold'>Cannabis Flos 18/1 PT <br /> Mango</span>
                    </div>
                    <div className='mt-4'>
                      <div className='flex justify-between'>
                        <span className='ml-4'>Kultivar</span>
                        <span className='mr-4'>Mango</span>
                      </div>
                      <div className='flex justify-between mt-1'>
                        <span className='ml-4'>Genetik</span>
                        <span className='mr-4'>hybrid</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <span className='font-bold'><EuroIcon className='text-teal-400 '/>11,66 <br />  <span>pro Gramm</span></span>
                      <span className='ml-6 w-20 h-5 text-sm border-2 rounded-tl-3xl          rounded-br-3xl bg-yellow-300'>in den Warenkorb</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className='w-94 h-100  '>
              {/* main start here */}
              <div className=' border-4 rounded-tl-3xl rounded-br-3xl border-teal-300 ' >
                <span className='m-4 text-xs border-4 rounded-md bg-red-200'><PanoramaFishEyeTwoToneIcon className='text-sm text-red-600'/>nicht lieferbar</span>
                <div className='flex justify-center'>
                <Image src={pic} alt="bottle" width={250} height={250} />
                </div>
                <hr className="border-2 mt-4 border-teal-300 bg-teal-200 "/>

                <div className='bg-teal-200'>
                  <div>
                    <div className=''>
                        <div className='border-2 bg-teal-400 ml-4 w-14 border-2 rounded-md'>Canify</div>
                    </div>
                    <div className='mt-4'><span className='bg-white border-2 rounded-md ml-4'>THC 18% </span> <span className='ml-4 border-2 bg-teal-400'>CBD 1%</span><AcUnitIcon className='ml-4 text-teal-500'/></div>
                    <div className='mt-4 ml-4'>
                      <span className='text-teal-900 font-bold'>Cannabis Flos 18/1 PT <br /> Mango</span>
                    </div>
                    <div className='mt-4'>
                      <div className='flex justify-between'>
                        <span className='ml-4'>Kultivar</span>
                        <span className='mr-4'>Mango</span>
                      </div>
                      <div className='flex justify-between mt-1'>
                        <span className='ml-4'>Genetik</span>
                        <span className='mr-4'>hybrid</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <span className='font-bold'><EuroIcon className='text-teal-400 '/>11,66 <br />  <span>pro Gramm</span></span>
                      <span className='ml-6 w-20 h-5 text-sm border-2 rounded-tl-3xl          rounded-br-3xl bg-yellow-300'>in den Warenkorb</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className='w-94 h-100  '>
              {/* main start here */}
              <div className=' border-4 rounded-tl-3xl rounded-br-3xl border-teal-300 ' >
                <span className='m-4 text-xs border-4 rounded-md bg-red-200'><PanoramaFishEyeTwoToneIcon className='text-sm text-red-600'/>nicht lieferbar</span>
                <div className='flex justify-center'>
                <Image src={pic} alt="bottle" width={250} height={250} />
                </div>
                <hr className="border-2 mt-4 border-teal-300 bg-teal-200 "/>

                <div className='bg-teal-200'>
                  <div>
                    <div className=''>
                        <div className='border-2 bg-teal-400 ml-4 w-14 border-2 rounded-md'>Canify</div>
                    </div>
                    <div className='mt-4'><span className='bg-white border-2 rounded-md ml-4'>THC 18% </span> <span className='ml-4 border-2 bg-teal-400'>CBD 1%</span><AcUnitIcon className='ml-4 text-teal-500'/></div>
                    <div className='mt-4 ml-4'>
                      <span className='text-teal-900 font-bold'>Cannabis Flos 18/1 PT <br /> Mango</span>
                    </div>
                    <div className='mt-4'>
                      <div className='flex justify-between'>
                        <span className='ml-4'>Kultivar</span>
                        <span className='mr-4'>Mango</span>
                      </div>
                      <div className='flex justify-between mt-1'>
                        <span className='ml-4'>Genetik</span>
                        <span className='mr-4'>hybrid</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <span className='font-bold'><EuroIcon className='text-teal-400 '/>11,66 <br />  <span>pro Gramm</span></span>
                      <span className='ml-6 w-20 h-5 text-sm border-2 rounded-tl-3xl          rounded-br-3xl bg-yellow-300'>in den Warenkorb</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className='w-94 h-100  '>
              {/* main start here */}
              <div className=' border-4 rounded-tl-3xl rounded-br-3xl border-teal-300 ' >
                <span className='m-4 text-xs border-4 rounded-md bg-red-200'><PanoramaFishEyeTwoToneIcon className='text-sm text-red-600'/>nicht lieferbar</span>
                <div className='flex justify-center'>
                <Image src={pic} alt="bottle" width={250} height={250} />
                </div>
                <hr className="border-2 mt-4 border-teal-300 bg-teal-200 "/>

                <div className='bg-teal-200'>
                  <div>
                    <div className=''>
                        <div className='border-2 bg-teal-400 ml-4 w-14 border-2 rounded-md'>Canify</div>
                    </div>
                    <div className='mt-4'><span className='bg-white border-2 rounded-md ml-4'>THC 18% </span> <span className='ml-4 border-2 bg-teal-400'>CBD 1%</span><AcUnitIcon className='ml-4 text-teal-500'/></div>
                    <div className='mt-4 ml-4'>
                      <span className='text-teal-900 font-bold'>Cannabis Flos 18/1 PT <br /> Mango</span>
                    </div>
                    <div className='mt-4'>
                      <div className='flex justify-between'>
                        <span className='ml-4'>Kultivar</span>
                        <span className='mr-4'>Mango</span>
                      </div>
                      <div className='flex justify-between mt-1'>
                        <span className='ml-4'>Genetik</span>
                        <span className='mr-4'>hybrid</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <span className='font-bold'><EuroIcon className='text-teal-400 '/>11,66 <br />  <span>pro Gramm</span></span>
                      <span className='ml-6 w-20 h-5 text-sm border-2 rounded-tl-3xl          rounded-br-3xl bg-yellow-300'>in den Warenkorb</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className='w-94 h-100  '>
              {/* main start here */}
              <div className=' border-4 rounded-tl-3xl rounded-br-3xl border-teal-300 ' >
                <span className='m-4 text-xs border-4 rounded-md bg-red-200'><PanoramaFishEyeTwoToneIcon className='text-sm text-red-600'/>nicht lieferbar</span>
                <div className='flex justify-center'>
                <Image src={pic} alt="bottle" width={250} height={250} />
                </div>
                <hr className="border-2 mt-4 border-teal-300 bg-teal-200 "/>

                <div className='bg-teal-200'>
                  <div>
                    <div className=''>
                        <div className='border-2 bg-teal-400 ml-4 w-14 border-2 rounded-md'>Canify</div>
                    </div>
                    <div className='mt-4'><span className='bg-white border-2 rounded-md ml-4'>THC 18% </span> <span className='ml-4 border-2 bg-teal-400'>CBD 1%</span><AcUnitIcon className='ml-4 text-teal-500'/></div>
                    <div className='mt-4 ml-4'>
                      <span className='text-teal-900 font-bold'>Cannabis Flos 18/1 PT <br /> Mango</span>
                    </div>
                    <div className='mt-4'>
                      <div className='flex justify-between'>
                        <span className='ml-4'>Kultivar</span>
                        <span className='mr-4'>Mango</span>
                      </div>
                      <div className='flex justify-between mt-1'>
                        <span className='ml-4'>Genetik</span>
                        <span className='mr-4'>hybrid</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <span className='font-bold'><EuroIcon className='text-teal-400 '/>11,66 <br />  <span>pro Gramm</span></span>
                      <span className='ml-6 w-20 h-5 text-sm border-2 rounded-tl-3xl          rounded-br-3xl bg-yellow-300'>in den Warenkorb</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className='w-94 h-100  '>
              {/* main start here */}
              <div className=' border-4 rounded-tl-3xl rounded-br-3xl border-teal-300 ' >
                <span className='m-4 text-xs border-4 rounded-md bg-red-200'><PanoramaFishEyeTwoToneIcon className='text-sm text-red-600'/>nicht lieferbar</span>
                <div className='flex justify-center'>
                <Image src={pic} alt="bottle" width={250} height={250} />
                </div>
                <hr className="border-2 mt-4 border-teal-300 bg-teal-200 "/>

                <div className='bg-teal-200'>
                  <div>
                    <div className=''>
                        <div className='border-2 bg-teal-400 ml-4 w-14 border-2 rounded-md'>Canify</div>
                    </div>
                    <div className='mt-4'><span className='bg-white border-2 rounded-md ml-4'>THC 18% </span> <span className='ml-4 border-2 bg-teal-400'>CBD 1%</span><AcUnitIcon className='ml-4 text-teal-500'/></div>
                    <div className='mt-4 ml-4'>
                      <span className='text-teal-900 font-bold'>Cannabis Flos 18/1 PT <br /> Mango</span>
                    </div>
                    <div className='mt-4'>
                      <div className='flex justify-between'>
                        <span className='ml-4'>Kultivar</span>
                        <span className='mr-4'>Mango</span>
                      </div>
                      <div className='flex justify-between mt-1'>
                        <span className='ml-4'>Genetik</span>
                        <span className='mr-4'>hybrid</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <span className='font-bold'><EuroIcon className='text-teal-400 '/>11,66 <br />  <span>pro Gramm</span></span>
                      <span className='ml-6 w-20 h-5 text-sm border-2 rounded-tl-3xl          rounded-br-3xl bg-yellow-300'>in den Warenkorb</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className='w-94 h-100  '>
              {/* main start here */}
              <div className=' border-4 rounded-tl-3xl rounded-br-3xl border-teal-300 ' >
                <span className='m-4 text-xs border-4 rounded-md bg-red-200'><PanoramaFishEyeTwoToneIcon className='text-sm text-red-600'/>nicht lieferbar</span>
                <div className='flex justify-center'>
                <Image src={pic} alt="bottle" width={250} height={250} />
                </div>
                <hr className="border-2 mt-4 border-teal-300 bg-teal-200 "/>

                <div className='bg-teal-200'>
                  <div>
                    <div className=''>
                        <div className='border-2 bg-teal-400 ml-4 w-14 border-2 rounded-md'>Canify</div>
                    </div>
                    <div className='mt-4'><span className='bg-white border-2 rounded-md ml-4'>THC 18% </span> <span className='ml-4 border-2 bg-teal-400'>CBD 1%</span><AcUnitIcon className='ml-4 text-teal-500'/></div>
                    <div className='mt-4 ml-4'>
                      <span className='text-teal-900 font-bold'>Cannabis Flos 18/1 PT <br /> Mango</span>
                    </div>
                    <div className='mt-4'>
                      <div className='flex justify-between'>
                        <span className='ml-4'>Kultivar</span>
                        <span className='mr-4'>Mango</span>
                      </div>
                      <div className='flex justify-between mt-1'>
                        <span className='ml-4'>Genetik</span>
                        <span className='mr-4'>hybrid</span>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <span className='font-bold'><EuroIcon className='text-teal-400 '/>11,66 <br />  <span>pro Gramm</span></span>
                      <span className='ml-6 w-20 h-5 text-sm border-2 rounded-tl-3xl          rounded-br-3xl bg-yellow-300'>in den Warenkorb</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
      
        </div>

        <footer className='flex bg-teal-500 border-4 border-teal-300 rounded-tl-xl rounded-br-xl'>
          <div className='text-sm flex flex-col text-gray-500 opacity-50'><span className='m-4'>AGB</span><span className='m-4'>Impressum</span><span className='m-4'>Datenschutz</span></div>
          <div className='m-4'>
            <div className='flex'>
              <span>< EnergySavingsLeafIcon className='text-blue-200'/>Rezept einlösen</span>
              <span className='ml-5'>< EnergySavingsLeafIcon className='text-blue-200'/>Live Bestand</span>
            </div>
            <div className='m-4'><span className='m-4'>< EnergySavingsLeafIcon className='text-blue-200'/>Videosprechstunde</span><span className='m-4'>< EnergySavingsLeafIcon className='text-blue-200'/>FAQs</span><span className='m-4'>< EnergySavingsLeafIcon className='text-blue-200'/>Kontakt</span></div>
          </div>
          <div className='m-4 w-20'>
            <div className='text-gray-500 opacity-50'>stanfort</div>
            <span className='mt-4 text-white'> 
            Bergstraße 49 - 57 69469 Weinheim (3 Glocken Quartier)</span>
          </div>
          <div className="flex flex-col mt-4">
            <span className='text-gray-500 opacity-50'>Telefon
            </span>
            <span>0223 545 5250</span>
          </div>
          <div className='m-4'>
          <span className='opacity-50'>Öffnungszeiten </span><br />
          <span>09:00 – 18:00 Uhr</span>
          </div>
        </footer>
    </>
  );
}