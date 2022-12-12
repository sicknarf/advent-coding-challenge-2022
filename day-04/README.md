# Day 4: Camp Cleanup

### Part 1

Space needs to be cleared before the last supplies can be unloaded from the ships, and so several Elves have been assigned the job of cleaning up sections of the camp. Every section has a unique ID number, and each Elf is assigned a range of section IDs.

However, as some of the Elves compare their section assignments with each other, they've noticed that many of the assignments overlap. To try to quickly find overlaps and reduce duplicated effort, the Elves pair up and make a big list of the section assignments for each pair (the puzzle input).

Some of the pairs have noticed that one of their assignments fully contains the other. For example, 2-8 fully contains 3-7, and 6-6 is fully contained by 4-6. In pairs where one assignment fully contains the other, one Elf in the pair would be exclusively cleaning sections their partner will already be cleaning, so these seem like the most in need of reconsideration. In this example, there are 2 such pairs.

In how many assignment pairs does one range fully contain the other?

<details>
<summary>The solution to part 1 based on my input was</summary>
<br>
513
</details>

___

### Part 2

It seems like there is still quite a bit of duplicate work planned. Instead, the Elves would like to know the number of pairs that overlap at all.

In how many assignment pairs do the ranges overlap?

<details>
<summary>The solution to part 2 based on my input was</summary>
<br>
878
</details>

___

### Challenges Faced and Additional Notes

This is when I realized a majority of Advent of Code will be parsing input. It's been interesting to split the input up into readable code. 