export function splitHostname(host: string | null): string[] | null {
	if (!host) {
		return null
	}

	const hostWithoutPort = host.includes(':')
		? host.split(':')[0].trim()
		: host.trim()

	const hostnameParts = hostWithoutPort.split('.')

	if (hostnameParts.length === 0) {
		return null
	}

	return hostnameParts
}
