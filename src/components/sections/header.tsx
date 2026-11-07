'use client';
import { useState } from 'react';
import {
	Box,
	Link,
	Container,
	Dialog,
	DialogContent,
	IconButton,
	Stack,
	Typography,
	useColorScheme,
	useScrollTrigger,
} from '@mui/material';

import { IconMenu, IconX as IconClose } from '@tabler/icons-react';

import GetStarted from '@/components/buttons/get-started-button';
import ThemeToggle from '@/components/ui/theme-toggle';

// Put Logo text here
const logoText = `Geneva`;

// Put Navigation links here
const navigationLinks: NavigationLink[] = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Features',
		href: '/#features-1',
	},
	{
		label: 'How it works',
		href: '/#features-3',
	},
	{
		label: 'Pricing',
		href: '/#pricing',
	},
	{
		label: 'FAQ',
		href: '/#faq',
	},
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
	return (
		<>
			<Box
				component="header"
				sx={{
					position: 'sticky',
					top: 0,
					zIndex: (theme) => theme.zIndex.appBar,
					// Keep the same layout height when the floating bar appears.
					height: 120,
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Container maxWidth="lg">
					<Stack
						component="nav"
						aria-label="Main navigation"
						alignItems="center"
						direction={'row'}
						justifyContent="space-between"
						sx={[
							{
								minHeight: scrolled ? { xs: 80, md: 88 } : 120,
								px: scrolled ? { xs: 2.5, md: 3 } : 0,
								py: scrolled ? 1.5 : 0,
								gap: 2,
								borderRadius: '999px',
								border: '1px solid transparent',
								borderColor: scrolled ? 'rgba(255, 255, 255, 0.7)' : 'transparent',
								backgroundColor: scrolled ? 'rgba(231, 233, 246, 0.72)' : 'transparent',
								backdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
								WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
								boxShadow: scrolled
									? '0 8px 32px rgba(16, 16, 30, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
									: 'none',
								transition: 'min-height 200ms ease, padding 200ms ease, background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease',
								'@media (prefers-reduced-motion: reduce)': {
									transition: 'none',
								},
							},
							(theme) =>
								theme.applyStyles('dark', {
									backgroundColor: scrolled ? 'rgba(24, 24, 24, 0.72)' : 'transparent',
									borderColor: scrolled ? 'rgba(255, 255, 255, 0.16)' : 'transparent',
									boxShadow: scrolled
										? '0 8px 32px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.06)'
										: 'none',
								}),
						]}
					>
						<LogoWrapper />
						<Stack
							alignItems="center"
							direction="row"
							spacing={scrolled ? 3 : 5}
							sx={{ display: { xs: 'none', lg: 'flex' } }}
						>
							{navigationLinks.map((link) => (
								<Link key={link.label} href={link.href} underline="none">
									<Typography color="textPrimary" variant="subtitle2">
										{link.label}
									</Typography>
								</Link>
							))}
						</Stack>
						<Stack
							alignItems="center"
							direction="row"
							spacing={2.5}
							sx={{ display: { xs: 'none', lg: 'flex' } }}
						>
							<ThemeToggle />
							<GetStarted />
						</Stack>
						<Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
							<IconButton
								aria-label="Open navigation menu"
								aria-expanded={open}
								aria-controls={open ? 'mobile-navigation' : undefined}
								onClick={() => setOpen(true)}
							>
								<IconMenu />
							</IconButton>
						</Box>
					</Stack>
				</Container>
			</Box>
			<Dialog
				id="mobile-navigation"
				aria-label="Mobile navigation"
				fullScreen
				keepMounted
				onClose={() => setOpen(false)}
				open={open}
				sx={{ '& .MuiDialog-paper': { borderRadius: 0 } }}
			>
				<DialogContent
					sx={{ py: { xs: 3.75, md: 3.75 }, px: { xs: 2, md: 3 } }}
				>
					<Container
						disableGutters
						maxWidth="xl"
						sx={{
							height: '100%',
						}}
					>
						<Stack
							justifyContent="space-between"
							sx={{
								height: '100%',
							}}
						>
							<Stack
								alignItems={'center'}
								direction={{ xs: 'row' }}
								justifyContent={{ xs: 'space-between' }}
							>
								<LogoWrapper />
								<Box>
									<IconButton
										aria-label="Close navigation menu"
										onClick={() => setOpen(false)}
										size="large"
										sx={{ p: 0 }}
									>
										<IconClose size={32} />
									</IconButton>
								</Box>
							</Stack>
							<Stack alignItems="center" spacing={5}>
								{navigationLinks.map((link) => (
									<Link
										key={link.label}
										href={link.href}
										onClick={() => setOpen(false)}
										underline="none"
									>
										<Typography
											color="textPrimary"
											component={'div'}
											variant="h3"
										>
											{link.label}
										</Typography>
									</Link>
								))}
							</Stack>
							<Container maxWidth="sm">
								<GetStarted fullWidth />
							</Container>
						</Stack>
					</Container>
				</DialogContent>
			</Dialog>
		</>
	);
}

interface NavigationLink {
	label: string;
	href: string;
}

function LogoWrapper() {
	const { mode } = useColorScheme();
	return (
		<Link href="/" underline="none">
			<Stack alignItems="center" direction="row" spacing={1.5}>
				{mode === 'dark' && <img src="/dark/logo-header.png" alt="" />}
				{mode === 'light' && <img src="/light/logo-header.png" alt="" />}
				<Typography color="textPrimary" component={'div'} variant="h4">
					{logoText}
				</Typography>
			</Stack>
		</Link>
	);
}
