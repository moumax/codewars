function fiveLine(s) {
  let trim = s.trim()
  console.log(trim)
  const repeat2 = `${trim}${trim}`
  const repeat3 = `${trim}${trim}${trim}`
  const repeat4 = `${trim}${trim}${trim}${trim}`
  const repeat5 = `${trim}${trim}${trim}${trim}${trim}`
  return `${trim}\n${repeat2}\n${repeat3}\n${repeat4}\n${repeat5}`
}
