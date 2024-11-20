<!DOCTYPE html>
<html lang="en">

<head>
	<!-- ... -->
	<script src="https://unpkg.com/@grapesjs/studio-sdk/dist/index.umd.js"></script>
	<link rel="stylesheet" href="https://unpkg.com/@grapesjs/studio-sdk/dist/style.css" />
</head>

<body>
	<div id="studio-editor" style="height: 100dvh"></div>
	<script>
		const BASE_URL = 'http://localhost/demo/grapesjs_backend.php';

		GrapesJsStudioSDK.createStudioEditor({
			root: '#studio-editor',
			licenseKey: '30f8bd9b606e4835ae5053fda5edca3a2d29df56a51d44f2a77a05c9cf944551',
			project: {
				type: 'web'
			},
			assets: {
				storageType: 'self',
				// Provide a custom upload handler for assets
				onUpload: async ({
					files
				}) => {
					const body = new FormData();
					for (const file of files) {
						body.append('files', file);
					}
					const response = await fetch(`${BASE_URL}?path=onUpload`, {
						method: 'POST',
						body
					});
					return await response.json();
				},
				onLoad: async () => {
					const response = await fetch(`${BASE_URL}?path=onLoad`);
					return await response.json();
				},
				onDelete: async ({
					assets
				}) => {
					await fetch(`${BASE_URL}?path=onDelete`, {
						method: 'DELETE',
						body: JSON.stringify({
							assets
						}),
					});
				}
			},
			storage: {
				type: 'self',
				// Provide a custom handler for saving the project data.
				onSave: async ({
					project
				}) => {
					const body = new FormData();
					body.append('project', JSON.stringify(project));
					await fetch(`${BASE_URL}?path=onSave`, {
						method: 'POST',
						body
					});
				},
				onLoad: async () => {
					const response = await fetch(`${BASE_URL}?path=onLoad`);
					return await response.json();
				},
				autosaveChanges: 100,
				autosaveIntervalMs: 10000
			}
		});
	</script>
</body>
<html>