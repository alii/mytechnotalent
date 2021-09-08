export default function Page() {
	return (
		<div className="h-full flex flex-col">
			<div className="flex-1 p-3">
				<h1>Kevin Thomas</h1>
			</div>
			<div className="bg-timberwolf p-1 flex space-x-1">
				<button type="button" className="border-2 border-timberwolf-800 px-2">
					Start
				</button>
			</div>
		</div>
	);
}
