import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { InputBasicValidation } from '@/app/(infrastructure)/_components/InputBasicValidation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SelectBasicValidation } from '@/app/(infrastructure)/_components/SelectBasicValidation'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { SearchBar } from '@/app/(infrastructure)/_components/SearchBar'
import { BoxList } from '@/app/(infrastructure)/_components/BoxList'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'primary.light',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
	minHeight: '42rem',
	minWidth: '15rem'
};

interface ISelectStandard {
    open: boolean
    handleOpen: () => void
    handleClose: () => void
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const dummyList = [
	{
		label: 'Construction Code Toronto 1.1',
		value: '1'
	},
	{
		label: 'Construction Code Toronto 1.2',
		value: '2'
	},
	{
		label: 'Construction Code Toronto 1.3',
		value: '3'
	},
	{
		label: 'Construction Code Toronto 1.4',
		value: '4'
	},
	{
		label: 'Construction Code Toronto 1.5',
		value: '5'
	},
	{
		label: 'Construction Code Toronto 1.6',
		value: '6'
	},
	{
		label: 'Construction Code Toronto 1.7',
		value: '7'
	},
]

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
}).required()


const SelectStandard = ({ open, handleOpen, handleClose }: ISelectStandard) => {
	const [value, setValue] = React.useState(0);
	const [country, setCountry] = React.useState(false);
	const [state, setState] = React.useState(false);
	const [city, setCity] = React.useState(false);
	const [selected, setSelected] = React.useState(false);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
    >
			<Box sx={style}>
				<Tabs 
					value={value} 
					onChange={handleChange} 
					aria-label="basic tabs example"
					TabIndicatorProps={{ style: { background: "#E97024" } }}
				>
					<Tab label="Preloaded Standards" {...a11yProps(0)} />
					<Tab label="My standards" {...a11yProps(1)}/>
				</Tabs>
				<CustomTabPanel value={value} index={0}>
					<Typography variant='h5' color='primary.contrastText'>SELECT A DESIGN STANDARD.</Typography>
					<Typography variant='body1' color='primary.contrastText' sx={{ mb: '1rem' }}>
						Follow the steps below to select a design standard
					</Typography>
					<Box sx={{ mb: '1rem' }}>
						<SelectBasicValidation
							label={'Country'}
							name='country'
							control={control}
							error={false}
							defaultValue={'Default value'}
							rules={{
								required: true
							}}
							options={[
								{
									label: 'country 1',
									value: 'country 1'
								}
							]}
							onInputChange={() => setCountry(true)}
						/>
					</Box>
					<Box sx={{ mb: '1rem' }}>
						<SelectBasicValidation
							label={'State'}
							name='state'
							control={control}
							error={false}
							defaultValue={'Default value'}
							rules={{
								required: true
							}}
							options={[
								{
									label: 'state 1',
									value: 'state 1'
								}
							]}
							onInputChange={() => setState(true)}
						/>
					</Box>
					<Box sx={{ mb: '1rem' }}>
						<SelectBasicValidation
							label={'City'}
							name='city'
							control={control}
							error={false}
							defaultValue={'Default value'}
							rules={{
								required: true
							}}
							options={[
								{
									label: 'city 1',
									value: 'city 1'
								}
							]}
							onInputChange={() => setCity(true)}
						/>
					</Box>
					<BoxList 
							list={dummyList} 
							isEmpty={country && state && city} 
							emptyMessage={'Once you select country/state/city, you will see the standards here.'}
						/>
					<Button 
						variant='contained' 
						disabled={!selected}
					>
						Select Design Standard
					</Button>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<Typography variant='h5' color='primary.contrastText'>
						SELECT A DESIGN STANDARD FROM YOUR UPLOADS.
					</Typography>
					<Typography variant='body1' color='primary.contrastText' sx={{ mb: '1rem' }}>
						Select a design standard from your uploaded documents.
					</Typography>
					<SelectBasicValidation
						label={'Search by country'}
						name='searchByCountry'
						control={control}
						error={false}
						defaultValue={'Default value'}
						rules={{
							required: true
						}}
						options={[
							{
								label: 'country 1',
								value: 'country 1'
							}
						]}
					/>
						<SearchBar />
						<BoxList 
							list={[{ label: 'test', value :'test'}, { label: 'test2', value: 'test2' }]} 
							isEmpty={false} 
							emptyMessage={'No standards found'}
						/>
						<Button variant='contained'>Select Design Standard</Button>
				</CustomTabPanel>
			</Box>
    </Modal>
  );
}

export default SelectStandard