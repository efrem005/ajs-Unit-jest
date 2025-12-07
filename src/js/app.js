export default function sortHeroesInDescendingHealth(data) {
	if (data.some(
		(item) => item.name === undefined
			|| item.health === undefined
			|| typeof item.health === 'string'
	)) {
		return null
	}

	return [...data].sort((a, b) => b.health - a.health)
}