import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import { useEffect, useState } from "react";

import { useDisclosure } from '@mantine/hooks';
import { IconMenu2, IconArrowBigRightLine, IconSearch, IconX } from '@tabler/icons-react';
import { rem, Drawer, Stack, Box, List, ActionIcon, Menu, Button, Autocomplete,
          NativeSelect,Transition, Divider, Group, Text, ThemeIcon, Accordion } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

type Country = {
  name: {
    common: string;
  },
  flag: string,
  flags: {
    png: string;
    svg: string;
  }
}
function MapDrawer(props: { opened: boolean, handleOpenDrawer: () => void, handleCloseDrawer: () => void }) {
  // const [opened, { open, close }] = useDisclosure(false);
  const [myTravels, setMyTravels] = useState<string[]>([]);
  const [allCountries, setAllCountries] = useState<{}[]>([]);
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  const handleFetchAllCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setAllCountries(data);
      })
  };

  // console.log('%callCountries', 'color: #f00', allCountries)

  return (
    <Drawer
      title="Mai Globo"
      size="xs"
      offset={15}
      withOverlay={false}
      styles={{content: {background: "rgba(255,255,255,0.5)", border: "3px solid rgba(255,255,255,0.5)"}}}
      transitionProps={{ transition: 'scale-y'}}
      opened={props.opened}
      onClose={props.handleCloseDrawer}>
      <Stack gap="sm">
        {/* <Divider my="xs" /> */}
        {/* <NativeSelect label="Country Data Category" data={["My Travels", "All Countries"]} /> */}
        {/* <NativeSelect label="Category Field" data={["My Data", "REST Countries"]} /> */}
        <Autocomplete
          leftSectionPointerEvents="none"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} />}
          rightSection={<IconX onClick={() => console.log('clicked search')} style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Search (suggestion: country)" data={['Colombia', 'Brazil', 'Italy', 'Nigeria']} />
        <Accordion
          itemType=""
          styles={{
            label: { padding: "2px"  }
          }}>
          <Accordion.Item value="My Travels">
          <Accordion.Control>My Travels</Accordion.Control>
          </Accordion.Item>

          <Accordion.Item value="All Countries">
            <Accordion.Control>All Countries</Accordion.Control>
            <Accordion.Panel>
            <Button size="xs" onClick={() => {
              setHasFetched(true);
              handleFetchAllCountries();
            }}>{hasFetched ? 'Refresh List' : 'Fetch All Countries'}</Button>
              <NativeSelect size="xs" label="Sort by:" data={["Continent", "Population", "Language"]} style={{marginBottom: "6px"}}/>
              {allCountries.length > 0 &&
                <Stack>
                  {allCountries.map((country, index) => (
                    <Group
                      key={index}
                      justify="space-between"
                      style={{border: '1px solid tomato'}}>
                        <Text span>{(country as Country).name.common}</Text>
                        <ActionIcon onClick={() => console.log('hello')}><IconArrowBigRightLine /></ActionIcon>
                    </Group>
                  ))}
                </Stack>}
              </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </Drawer>
  )
}

export default function Home() {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map === null) {
      setMap(new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/jufrench/cltvtd3g700zj01pb2vnx0q42',
        center: [-94.57797241210938, 39.099761962890625],
        zoom: 2
      }));
    }
  })

  if (map)  {
    const usa = new mapboxgl.Marker({ color: '#fcc200'})
      .setLngLat([-94.57797241210938, 39.099761962890625])
      .addTo(map);
  
    const france = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([1.8883335, 46.603354])
        .addTo(map);
  
    const englad = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-1.2649062, 52.5310214])
        .addTo(map);
  
    const italy = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([12.674297, 42.6384261])
        .addTo(map);
  
    const austria = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([14.12456, 47.59397])
        .addTo(map);
  
    const czechia = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([15.3381061, 49.7439047])
        .addTo(map);
  
    const hungary = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([19.5060937, 47.1817585])
        .addTo(map);
  
    const portugal = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-8.1353519, 39.6621648])
        .addTo(map);
  
    const germany = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([10.4478313, 51.1638175])
        .addTo(map);
  
    const brazil = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-53.2, -10.3333333])
        .addTo(map);
  
    const colombia = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-72.9088133, 4.099917])
        .addTo(map);
  
    const puertorico = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-66.4858295, 18.2247706])
        .addTo(map);
  
    const nepal = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([83.9999901, 28.3780464])
        .addTo(map);
  
    const qatar = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([51.2295295, 25.3336984])
        .addTo(map);
  
    const mexico = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-102.0077097, 23.6585116])
        .addTo(map);
  
    const spain = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-4.8379791, 39.3260685])
        .addTo(map);
  
    const chile = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-71.3187697, -31.7613365])
        .addTo(map);
  
    const costarica = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-84.0739102, 10.2735633])
        .addTo(map);
  
    const canada = new mapboxgl.Marker({ color: '#fcc200'})
        .setLngLat([-107.991707, 61.0666922])
        .addTo(map);
  
    // document.getElementById('fly').addEventListener('click', () => {
    //   console.log('flying')
    //     map.flyTo({
    //         center: [-94.57797241210938, 39.099761962890625],
    //         zoom: 5,
    //         essential: true
    //     });
    // });
  }
  const [opened, { open, close }] = useDisclosure(false);

  const handleOpenDrawer = () => {
    open();
  }

  const handleCloseDrawer = () => {
    close();
    console.log('closed')
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
      <main className={`${inter.className}`}>
        <div id="map" style={{position: "absolute", top: 0, bottom: 0, width: "100%"}}></div>
        <ActionIcon color="teal" onClick={open} style={{position: "absolute", top: "10px", left: "10px"}}>
          <IconMenu2 />
        </ActionIcon>
        <MapDrawer opened={opened} handleOpenDrawer={handleOpenDrawer} handleCloseDrawer={handleCloseDrawer} />
        {/* <Menu>
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Search Your Countries</Menu.Label>
            <Menu.Item closeMenuOnClick={false}>
              <Autocomplete placeholder="Search" data={['Colombia', 'Brazil', 'Italy']} />
            </Menu.Item>
            <Menu.Item>
              Item 1
            </Menu.Item>
            <Menu.Item>
              Item 1
            </Menu.Item>
          </Menu.Dropdown>
        </Menu> */}
      </main>
    </>
  );
}
