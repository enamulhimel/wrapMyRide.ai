import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import img1 from '../../assets/howItWorks/1.png'
import img2 from '../../assets/howItWorks/2.png'
import img3 from '../../assets/howItWorks/3.png'
import img4 from '../../assets/howItWorks/4.png'
import img5 from '../../assets/howItWorks/4.png'



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`step-tabpanel-${index}`}
      aria-labelledby={`step-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="py-10">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `step-tab-${index}`,
    'aria-controls': `step-tabpanel-${index}`,
  };
}

export default function WorkTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

      const tabData = [
      {
        id: 0,
        step: '01',
        title: 'Upload Your Car Photo',
        description:
          'Start by uploading a high-quality photo of your car. Our AI works best with clear images but can handle various angles. We support JPG, PNG, and HEIC formats.',
        image: img1,
      },
      {
        id: 1,
        step: '02',
        title: 'Describe Your Desired Style',
        description:
          'In the next step, simply input the wrap style you\'re dreaming of. To simplify, you can also select from our list of popular preset styles like "Matte Black", "Gloss White", "Carbon Fiber", and more.',
        image: img2,
      },
      {
        id: 2,
        step: '03',
        title: 'AI Generates Your Preview',
        description:
          'Once everything is set, our AI model will process your input and generate a stunning wrap preview of your car. You can download, share, or request a quote right away.',
        image: img3,
      },
      {
        id: 3,
        step: '04',
        title: 'Customize & Refine',
        description:
          'Want to see your wrapped car in a different setting? Optionally replace the background with one of our presets or upload your own image, like your driveway or a scenic spot.',
        image: img4,
      },
      {
        id: 4,
        step: '05',
        title: 'Download, Share, or Get a Quote',
        description:
          'Once you are happy with your design, you can download the image, share it with friends online, or easily submit it to a partner wrap shop or dealer to get a real quote.',
        image: img5,
      },
    ];


  return (
    <section className="bg-black text-white">
  {/* ✅ Full-width banner */}
  {/* <div
    className="w-full bg-cover bg-center bg-no-repeat pb-20 pt-30"
    style={{ backgroundImage: `url(${workbg})` }}
  >
    <div className="text-center mb-10 max-w-4xl mx-auto px-4 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
        Seeing Your Wrap <br /> Idea is Easy
      </h2>
      <p className="text-gray-100 text-base md:text-lg">
        Follow these simple steps to bring your car wrap vision to life with AI.
      </p>
    </div>
  </div> */}

      <div className='py-10'>
      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: '#333' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{ style: { backgroundColor: '#facc15', height: 3 } }}
          textColor="inherit" // Add this line to prevent MUI default color (blue)
        >
          <Tab
            label="Upload Your Car Photo"
            {...a11yProps(0)}
            sx={{
              color: value === 0 ? '#ffffff' : '#e5e7eb',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          />
          <Tab
            label="Describe Your Desired Style"
            {...a11yProps(1)}
            sx={{
              color: value === 1 ? '#ffffff' : '#e5e7eb',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          />
          <Tab
            label="AI Generates Your Preview"
            {...a11yProps(2)}
            sx={{
              color: value === 2 ? '#ffffff' : '#e5e7eb',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          />
          <Tab
            label="AI Generates Your Preview"
            {...a11yProps(3)}
            sx={{
              color: value === 3 ? '#ffffff' : '#e5e7eb',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          />
          <Tab
            label="AI Generates Your Preview"
            {...a11yProps(4)}
            sx={{
              color: value === 4 ? '#ffffff' : '#e5e7eb',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      {tabData.map((tab) => (
        <CustomTabPanel key={tab.id} value={value} index={tab.id}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
        <p className="text-yellow-400 text-sm mb-2">{tab.step}</p>
        <h3 className="text-2xl font-bold mb-4">{tab.title}</h3>
        <p className="text-gray-300">{tab.description}</p>
      </div>
      <div>
        <img
          src={tab.image}
          alt={tab.title}
          className="rounded-lg shadow-lg w-full max-w-full md:max-w-md mx-auto"
        />
        </div>
      </div>
      </CustomTabPanel>
        ))}
      </div>
    </section>
  );
}
